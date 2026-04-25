import { useActionData } from "react-router";
import CheckoutForm from "../components/Cart/CheckoutForm";
import db from "../utils/db";

const CheckoutPage = () => {
  const actionData = useActionData();
  
  

  return (
    <div className="container-fluid">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Checkout</span>
      </h2>
      {actionData && actionData.success && (
        <p className="text-success mx-xl-5">
          Order placed successfully! Your order ID is: {actionData.id}
        </p>
      )}
      {actionData && !actionData.success && (
        <p className="text-danger mx-xl-5">
          An error occurred: {actionData.message}
        </p>
      )}
      <CheckoutForm />
    </div>
  );
};

export const action =
  (cartContext) =>
  async ({ request }) => {
    const formData = await request.formData();
    const userData = JSON.parse(localStorage.getItem("userData"));

    const billingInfo = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: formData.get("billingPhone"),
      address1: formData.get("billingAddress1"),
      address2: formData.get("billingAddress2"),
      country: formData.get("billingCountry"),
      city: formData.get("billingCity"),
      state: formData.get("billingState"),
      zip: formData.get("billingZip"),
    };

    const shipToDifferent = formData.get("shipToDifferent");
    const shippingInfo = shipToDifferent
      ? {
          firstName: formData.get("shippingFirstName"),
          lastName: formData.get("shippingLastName"),
          email: formData.get("shippingEmail"),
          phone: formData.get("shippingPhone"),
          address1: formData.get("shippingAddress1"),
          address2: formData.get("shippingAddress2"),
          country: formData.get("shippingCountry"),
          city: formData.get("shippingCity"),
          state: formData.get("shippingState"),
          zip: formData.get("shippingZip"),
        }
      : { ...billingInfo };


    const order = {
      userId: userData.localId,
      billingInfo,
      shippingInfo,
      items: cartContext.items,
      subtotal: cartContext.subtotal,
      shipping: cartContext.shipping,
      total: cartContext.total,
      orderDate: new Date().toISOString(),
      orderStatus: "pending",
      payment: formData.get("payment"),
    };

    try {
      const response = await db.post("/orders.json", order);
      cartContext.resetCart();
      return { success: true, id: response.data.name };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

export default CheckoutPage;
