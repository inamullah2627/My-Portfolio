import React from "react";

import Intro from "./components/intro";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Blogs from "./components/Blogs";
import "./app.scss";

const App = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Portfolio />
      <Blogs />
    </div>
  );
};

export default App;
