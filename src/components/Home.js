import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ComputerIcon from "@material-ui/icons/Computer";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./Nav";
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
  iconLink: {
    fontSize: "3rem",
    margin: "0 .5%",
    [theme.breakpoints.down("sm")]: { fontSize: "2rem" }
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Nav />
      <div className="home-content">
        <h1 className="heading">HELLO WORLD.</h1>
        <p className="home-paragraph">
          My name is Ian Schwartz, and I am a full stack web developer.
        </p>
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
