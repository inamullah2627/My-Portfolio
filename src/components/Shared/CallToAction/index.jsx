import React from "react";
import Arrow from "../Arrow";
import "./style.scss";

const CallToAction = ({ text }) => {
  return (
    <div className="call-to-action">
      <span className="text">{text}</span>
      <Arrow />
    </div>
  );
};

export default CallToAction;
