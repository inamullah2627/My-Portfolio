import React from "react";

import Intro from "./components/intro";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import "./app.scss";

const App = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Portfolio />
    </div>
  );
};

export default App;
