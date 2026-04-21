import { Form } from "react-router";

const LoginForm = () => {
  return (
    <div className="col-lg-7 mb-5">
      <div className="contact-form bg-light p-30">
        <div id="success"></div>
        <Form method="post" noValidate={false}>
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
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
