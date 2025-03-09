import React from "react";

import Logo from "../../images/logo.png";
import CallToAction from "../Shared/CallToAction";

import "./style.scss";

const Navigation = () => {
  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={Logo} alt="Navigation Logo" />
      </div>
      <div className="navigation">
        <span className="navigation-item">Skills</span>
        <span className="navigation-item">Portfolio</span>
        <span className="navigation-item">Blog & Articles</span>
        <CallToAction text="Contact me" />
      </div>
    </div>
  );
};

export default Navigation;
