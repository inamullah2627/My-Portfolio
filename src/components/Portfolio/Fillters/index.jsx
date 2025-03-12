import React, { useState } from "react";

import "./style.scss";

const filltersData = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Products",
    id: "product",
  },
  {
    name: "Web Pages",
    id: "web-page",
  },
  {
    name: "Web Apps",
    id: "web-app",
  },
  {
    name: "Mobile Apps",
    id: "mobile-app",
  },
];

const Fillters = ({ filterProjects }) => {
  const [active, setActive] = useState("");

  const clickHandler = (id) => {
    setActive(id);
    filterProjects(id);
  };

  return (
    <ul className="filters-menu-items">
      {filltersData.map((item, index) => {
        return (
          <li
            key={item.id}
            className={`filter-menu-item ${active === item.id ? "active" : ""}`}
            onClick={() => clickHandler(item.id)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Fillters;
