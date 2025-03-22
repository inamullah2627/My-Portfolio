import React from "react";

import Logo from "../../images/logo.png";
import CallToAction from "../Shared/CallToAction";

import { scrollToSection } from "../utils/Helper";

import "./style.scss";

const Navigation = () => {
  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={Logo} alt="Navigation Logo" />
      </div>
      <div className="navigation">
        <span
          className="navigation-item"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => scrollToSection("portfolio")}
        >
          Portfolio
        </span>
        <span
          className="navigation-item"
          onClick={() => scrollToSection("blog")}
        >
          Blog & Articles
        </span>
        <CallToAction
          text="Contact me"
          action={() => scrollToSection("contact")}
        />
      </div>
    </div>
  );
};

export default Navigation;
