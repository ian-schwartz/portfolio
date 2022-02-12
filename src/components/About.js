import React from "react";
import Nav from "./Nav";
import photo from "../assets/IMG_1604.jpg";
import Footer from "./Footer";
import { ReactComponent as HTML5 } from "../assets/tech-skills/html-5.svg";
import { ReactComponent as CSS3 } from "../assets/tech-skills/css-5.svg";
import { ReactComponent as Less } from "../assets/tech-skills/less.svg";
import { ReactComponent as Sass } from "../assets/tech-skills/sass-1.svg";
import { ReactComponent as JS } from "../assets/tech-skills/javascript.svg";
import { ReactComponent as Python } from "../assets/tech-skills/python-4.svg";
import { ReactComponent as ReactLogo } from "../assets/tech-skills/react-2.svg";
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
            from Colorado State University, I enjoyed success as a professional
            poker player. As a player, I built valuable skills in problem
            solving and analytical thinking. My passion for technology
            eventually led me to web development, a skill which allows me to
            realize my creative potential while making an impact. <br />
            <br /> Over the past few years, I have built a variety of projects both
            individually and within teams, working with team members across
            various disciplines. I take pride in being a dedicated and reliable
            team player with a strong will to discover the best solution to the
            problem being faced.
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
