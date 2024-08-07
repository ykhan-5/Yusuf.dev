import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../CSS/ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mldrneop");

  if (state.succeeded) {
    return <p className="success-message">Thanks for sending a message!</p>;
  }

  return (
    <div className="contact-container" id="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-title">Contact Me</div>
        <div className="left-column">
          <label htmlFor="name">Your Name:</label>
          <input name="name" type="text" id="name" required />
          <label htmlFor="email">Email Address:</label>
          <input id="email" type="email" name="email" />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="error"
          />
        </div>
        <div className="right-column">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="error"
          />
        </div>
        <div className="button-row">
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
