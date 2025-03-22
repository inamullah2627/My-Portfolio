import React from "react";

import Intro from "./components/intro";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./app.scss";

const App = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Portfolio />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
