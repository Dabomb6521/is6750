import { Form } from "react-router";

const SignUpForm = () => {
  return (
    <div className="col-lg-7 mb-5">
      <div className="contact-form bg-light p-30">
        <div id="success"></div>
        <Form method="post" noValidate={false}>
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="First Name"
              required="required"
              data-validation-required-message="Please enter your first name"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Last Name"
              required="required"
              data-validation-required-message="Please enter your last name"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              required="required"
              data-validation-required-message="Please enter your email"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="Password"
              required="required"
              data-validation-required-message="Please enter password"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div>
            <button className="btn btn-primary py-2 px-4" type="submit">
              Sign Up
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
