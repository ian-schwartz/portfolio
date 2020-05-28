import React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import png from "../assets/technologist-light-skin-tone_1f9d1-1f3fb-200d-1f4bb.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ComputerIcon from "@material-ui/icons/Computer";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./Nav";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  iconLink: {
    fontSize: "3rem",
    margin: "0 .5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.25rem",
      margin: "3rem .5rem",
    },
    transition: "transform .3s",
    "&:hover": {
      transform: "scale(1.125)",
      color: "#342056",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Nav />
      <div className="home-content">
        <img src={png} className="home-png" alt="Technologist Emoji" />
        <br />
        <Typist
          startDelay={1800}
          avgTypingDelay={75}
          className="home-paragraph"
        >
          <p className="home-paragraph">
            Hi! My name is Ian Schwartz, and I am a full stack web developer.
          </p>
        </Typist>
        <br />
        <a href="https://www.github.com/ian-schwartz" target="_blank">
          <GitHubIcon color="primary" className={classes.iconLink} />
        </a>
        <a
          href="https://www.linkedin.com/in/ian-schwartz-277bb857/"
          target="_blank"
        >
          <LinkedInIcon color="primary" className={classes.iconLink} />
        </a>
        <Link to="/projects">
          <ComputerIcon color="primary" className={classes.iconLink} />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;
