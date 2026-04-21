import { useActionData } from "react-router";
import LoginForm from "../components/Auth/LoginForm";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    // Firebase login logic
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const LoginPage = () => {
  const actionData = useActionData();

  return (
    <>
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Login</span>
        </h2>
        {actionData && actionData.success && (
          <p className="text-success mx-xl-5">Log in Successful!</p>
        )}
        {actionData && !actionData.success && (
          <p className="text-danger mx-xl-5">
            An error occurred: {actionData.message}
          </p>
        )}
        <div className="row px-xl-5">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
