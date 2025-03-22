import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
      <h4>
        I would be happy to answer any question you may have about frontend web
        development!
      </h4>
      <div className="contact-option">
        <FaPhoneAlt />
        <span className="text">+0001112222333</span>
      </div>
      <div className="contact-option">
        <MdEmail />
        <span className="text">inam12345@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
