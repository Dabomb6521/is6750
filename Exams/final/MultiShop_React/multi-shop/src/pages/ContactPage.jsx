import ContactForm from "../components/Contact/ContactForm";
import Location from "../components/Contact/Location";
import { useActionData } from "react-router";
import db from "../utils/db";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  try {
    const response = await db.post("contacts.json", {
      name,
      email,
      subject,
      message,
    });
    return { success: true, id: response.data.name };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const ContactPage = () => {
  const actionData = useActionData();

  return (
    <>
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Contact Us</span>
        </h2>
        {actionData && actionData.success && (
          <p className="text-success mx-xl-5">
            Your contact request was submitted successfully! Your request is:{" "}
            {actionData.id}
          </p>
        )}
        {actionData && !actionData.success && (
          <p className="text-danger mx-xl-5">
            An error occurred: {actionData.message}
          </p>
        )}
        <div className="row px-xl-5">
          <ContactForm />
          <Location />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
