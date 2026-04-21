import { useActionData } from "react-router";
import SignUpForm from "../components/Auth/SignUpForm";

const SignUpPage = () => {
  const actionData = useActionData();

  return (
    <>
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Sign Up</span>
        </h2>
        {actionData && (
          <p className="text-danger mx-xl-5">{actionData.message}</p>
        )}
        <div className="row px-xl-5">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
