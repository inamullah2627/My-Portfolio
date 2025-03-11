import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import Section from "../Shared/Section";
import TechIcon from "../../images/tech-icons.png";
import CallToAction from "../Shared/CallToAction";
import "./style.scss";

const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={TechIcon} alt="JS,React,HTML,CSS" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            I am a skilled Frontend Web Developer with expertise in React.js,
            JavaScript, Bootstrap, Sass, CSS, and HTML. With a strong foundation
            in modern web technologies, I specialize in building responsive,
            user-friendly, and visually appealing web applications. My
            proficiency in React.js allows me to develop dynamic and interactive
            UIs, while my expertise in JavaScript ensures seamless
            functionality. I utilize Bootstrap and Sass to create elegant and
            efficient designs, ensuring cross-browser compatibility and
            responsiveness. Passionate about crafting clean and maintainable
            code, I am always eager to learn new technologies and enhance my
            development skills.
          </p>
          <CallToAction text="Download CV" icon={<AiOutlineCloudDownload />} />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
