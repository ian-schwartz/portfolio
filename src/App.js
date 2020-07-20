import React, { useEffect } from "react";
import "./App.css";
import "react-typist/dist/Typist.css";
import { Route } from "react-router-dom";
import ReactGA from "react-ga";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-173105216-1");
    // Report Page View
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </div>
  );
}

export default App;
