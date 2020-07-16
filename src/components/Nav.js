import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  appBar: {
    position: "sticky",
    backgroundColor: "#fcfdfd",
  },
  button: {
    fontSize: "1.25rem",
    margin: "0 .25rem",
    [theme.breakpoints.down("sm")]: { fontSize: "1rem", margin: "0 .125rem" },
    [theme.breakpoints.down("xs")]: { fontSize: ".725rem", margin: "0" },
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className="nav-container">
          <Link to="/">
            <CodeIcon color="primary" fontSize="large" />
          </Link>
          <div className="nav-links">
            <Link to="/" className={classes.link}>
              <Button className={classes.button} id="home-btn">
                Home
              </Button>
            </Link>
            <Link to="/about" className={classes.link}>
              <Button className={classes.button}>About</Button>
            </Link>
            <a
              href="https://resume.creddle.io/resume/bbjuttd019o"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <Button className={classes.button}>Resume</Button>
              </span>
            </a>
            <Link to="/contact" className={classes.link}>
              <Button className={classes.button}>Contact</Button>
            </Link>
            <Link to="/projects" className={classes.link}>
              <Button
                color="primary"
                variant="outlined"
                className={classes.button}
              >
                Projects
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
