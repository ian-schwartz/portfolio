import React from 'react';
import './App.css';
import 'react-typist/dist/Typist.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
    </div>
  );
}

export default App;
