import React from "react";
import './Contact.css'
import Form from "../Form/Form";

function Contact() {
  return (
    <div className="container" id="contact">
      <div className="contact__container-left">
        <div className="contact__text-wrap">
          <h3>Send me a message!</h3>
          <p>
            Got some work <br/>Want to collaborate,<br/> Or just want to say HI!!<br/> Send message
          </p>
        </div>
      </div>
      <div className="contact__container-right">
        <Form />
      </div>
    </div>
  );
}

export default Contact;
