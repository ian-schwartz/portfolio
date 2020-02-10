import React from "react";
import Nav from "./Nav";
import photo from "../assets/IMG_1604.jpg";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Nav />
      <div className="about-wrap">
        <div className="about-content">
          <h1 className="heading">ABOUT ME.</h1>
          <p className="about-paragraph">
            After graduating with a bachelor's degree in Communication Studies
            from Colorado State University, Ian enjoyed success as a
            professional poker player. In his time playing, he built valuable
            skills in problem solving and analytical thinking. His passion for
            technology eventually led to becoming engrossed in the world of web
            development. Over the past year, Ian has built a variety of projects
            both individually and within teams, working in agile environments
            with developers across various disciplines.
          </p>
        </div>
        <img src={photo} className="about-img" alt="Ian" />
      </div>
      <Footer />
    </>
  );
};

export default About;
