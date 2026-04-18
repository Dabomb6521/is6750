import { Form } from "react-router";

const ContactForm = () => {
  return (
    <div className="col-lg-7 mb-5">
      <div className="contact-form bg-light p-30">
        <div id="success"></div>
        <Form method="post" noValidate={false}>
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Your Name"
              required="required"
              data-validation-required-message="Please enter your name"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your Email"
              required="required"
              data-validation-required-message="Please enter your email"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="Subject"
              required="required"
              data-validation-required-message="Please enter a subject"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <textarea
              className="form-control"
              rows="8"
              name="message"
              placeholder="Message"
              required="required"
              data-validation-required-message="Please enter your message"
            ></textarea>
            <p className="help-block text-danger"></p>
          </div>
          <div>
            <button
              className="btn btn-primary py-2 px-4"
              type="submit"
              id="sendMessageButton"
            >
              Send Message
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
