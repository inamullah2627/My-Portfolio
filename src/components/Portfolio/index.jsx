import React, { useState } from "react";

import Section from "../Shared/Section";
import Fillters from "./Fillters";
import Showcase from "./Showcase";

import "./style.scss";

const projectsData = [
  {
    id: 1,
    name: "Healthy food restraunt",
    tags: ["web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-7.jpg"),
    },
  },
  {
    id: 2,
    name: "Anna & Daniel",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-2.jpg"),
    },
  },
  {
    id: 3,
    name: "Web Design Landing Page",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-8.jpg"),
    },
  },
  {
    id: 4,
    name: "Business Analytics Web App",
    tags: ["web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-1.jpg"),
    },
  },
  {
    id: 5,
    name: "Healthy food restraunt",
    tags: ["product"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-3.jpg"),
    },
  },
  {
    id: 6,
    name: "Anna & Daniel",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-4.jpg"),
    },
  },
  {
    id: 7,
    name: "Web Design Landing Page",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-5.jpg"),
    },
  },
  {
    id: 8,
    name: "Business Analytics Web App",
    tags: ["web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-6.jpg"),
    },
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false);

  const filterProjects = (tag) => {
    setTransition("zoomout");
    setTimeout(() => {
      if (tag !== "all") {
        const filteredProjects = projectsData.filter((f) =>
          f.tags.includes(tag)
        );
        setProjects(filteredProjects);
      } else {
        setProjects(projectsData);
      }
      setTransition("zoomin");
    }, 200);

    setTimeout(() => {
      setTransition(false);
    }, 600);
  };

  return (
    <Section id="portfolio" title="Check my Portfolio" background="light">
      <div className="portfolio-content-wrapper">
        <Fillters filterProjects={(tag) => filterProjects(tag)} />
        <Showcase data={projects} transition={transition} />
      </div>
    </Section>
  );
};

export default Portfolio;
