import { useContext } from "react";
import { Link, useRouteLoaderData } from "react-router";
import { CartContext } from "../../store/cart-context";

const Cart = () => {
  const { items, subtotal, shipping, total, removeItem, updateItemQuantity } =
    useContext(CartContext);
  const userData = useRouteLoaderData("root");

  if (items.length === 0) {
    return (
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12 text-center py-5">
            <h2 className="font-weight-bold mb-3">
              Looks like you don't have any items yet.
            </h2>
            <Link to="/categories">Click here to shop!</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-light table-borderless table-hover text-center mb-0">
            <thead className="thead-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {items.map((item) => (
                <tr key={items.id}>
                  <td className="align-middle">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      style={{ width: 50 }}
                    />
                    {item.title}
                  </td>
                  <td className="align-middle">${item.price.toFixed(2)}</td>
                  <td className="align-middle">
                    <input
                      type="number"
                      min="1"
                      className="form-control form-control-sm bg-secondary border-0 text-center"
                      style={{ width: 80 }}
                      value={item.quantity}
                      onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
                    />
                  </td>
                  <td className="align-middle">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="align-middle">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <form className="mb-30" action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-0 p-4"
                placeholder="Coupon Code"
              />
              <div className="input-group-append">
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
            </div>
          </form>
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Cart Summary</span>
          </h5>
          <div className="bg-light p-30 mb-5">
            <div className="border-bottom pb-2">
              <div className="d-flex justify-content-between mb-3">
                <h6>Subtotal</h6>
                <h6>${subtotal.toFixed(2)}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">${shipping.toFixed(2)}</h6>
              </div>
            </div>
            <div className="pt-2">
              <div className="d-flex justify-content-between mt-2">
                <h5>Total</h5>
                <h5>${total.toFixed(2)}</h5>
              </div>
              {userData ? (
                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                  Proceed To Checkout
                </button>
              ) : (
                <p className="text-center mt-3">
                  Please <Link to="/login">log in</Link> or{" "}
                  <Link to="/signup">sign up</Link> to checkout.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
