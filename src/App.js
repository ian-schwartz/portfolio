import React from "react";
import "./App.css";
import "react-typist/dist/Typist.css";
import { Route } from "react-router-dom";
import ReactGA from "react-ga";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

ReactGA.initialize('UA-173105216-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
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
