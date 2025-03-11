import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../Shared/CallToAction";

import "./style.scss";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="item">
                <img src={hand} alt="" />
              </span>
              <span className="text">, I Am</span>
            </span>
            <span className="big-text">Inam ullah</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            impedit ratione ex, optio magni tempore hic nostrum minima
            cupiditate repudiandae quo.
          </p>
          <CallToAction text="Contact me" />
        </div>
        <div className="right-col">
          <img src={girl} alt="" />
          <div className="highlights horizontal">
            <div className="icon">
              <BsAwardFill />
            </div>

            <div className="text">Best Design Award</div>
          </div>
          <div className="highlights vertical">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>4k+</span>
              Happy Customers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
