import React from "react";

import Section from "../Shared/Section";
import ContactInfo from "./Contact-info";
import Form from "./Form";
import "./style.scss";

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Any Question? Feel free to contact"
      background="light"
    >
      <div className="contact-content-wrapper">
        <ContactInfo />
        <Form />
      </div>
    </Section>
  );
};

export default Contact;
