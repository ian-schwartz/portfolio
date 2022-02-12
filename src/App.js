import React, { useEffect } from "react";
import "./App.css";
import "react-typist/dist/Typist.css";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

ReactGA.initialize("UA-173105216-1");
const browserHistory = createBrowserHistory();
browserHistory.listen((location) => {
  ReactGA.pageview(location.pathname + location.search);
});

const App = () => {
  useEffect(() => {
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
