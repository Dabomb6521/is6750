import { useActionData } from "react-router";
import SignUpForm from "../components/Auth/SignUpForm";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    // Firebase login logic
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const SignUpPage = () => {
  const actionData = useActionData();

  return (
    <>
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Sign Up</span>
        </h2>
        {actionData && actionData.success && (
          <p className="text-success mx-xl-5">Account Created Successfully!</p>
        )}
        {actionData && !actionData.success && (
          <p className="text-danger mx-xl-5">
            An error occurred: {actionData.message}
          </p>
        )}
        <div className="row px-xl-5">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
