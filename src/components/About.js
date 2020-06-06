import React from "react";
import Nav from "./Nav";
import photo from "../assets/IMG_1604.jpg";
import Footer from "./Footer";
import { ReactComponent as HTML5 } from "../assets/tech-skills/html-5.svg";
import { ReactComponent as CSS3 } from "../assets/tech-skills/css-5.svg";
import { ReactComponent as Less } from "../assets/tech-skills/less.svg";
import { ReactComponent as Sass } from "../assets/tech-skills/sass-1.svg";
import { ReactComponent as JS } from "../assets/tech-skills/javascript.svg";
import { ReactComponent as Python } from "../assets/tech-skills/python-3.svg";
import { ReactComponent as ReactLogo } from "../assets/tech-skills/react.svg";
import { ReactComponent as Redux } from "../assets/tech-skills/redux.svg";
import { ReactComponent as Node } from "../assets/tech-skills/nodejs.svg";
import { ReactComponent as GraphQL } from "../assets/tech-skills/graphql.svg";
import { ReactComponent as Git } from "../assets/tech-skills/git.svg";

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
            development. Ian takes pride in being a dedicated and reliable team
            player, who thrives in collaborative environments and has a strong
            will to discover the best solution to the problem being faced. Over
            the past year, Ian has built a variety of projects both individually
            and within teams, working with developers across various
            disciplines.
          </p>
          <br />

          <p
            className="about-paragraph"
            style={{ textDecoration: "underline" }}
          >
            Technical Skills
          </p>

          <br />
          <HTML5 className="tech-logo" />
          <CSS3 className="tech-logo" />
          <Less className="tech-logo" />
          <Sass className="tech-logo" />
          <JS className="tech-logo" />
          <Python className="tech-logo" />
          <ReactLogo className="tech-logo" />
          <Redux className="tech-logo" />
          <Node className="tech-logo" />
          <GraphQL className="tech-logo" />
          <Git className="tech-logo" />
        </div>
        <img src={photo} className="about-img" alt="Ian" />
      </div>
      <Footer />
    </>
  );
};

export default About;
