import React from "react";
import { BottomNavigation, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    fontFamily: "Source Sans Pro",
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "2%",
    backgroundColor: "#3f51b5"
  },
  text: {
    fontFamily: "Source Sans Pro",
    fontSize: ".75rem",
    color: "#000",
    padding: ".75px"
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation className={classes.footer}>
        <Typography className={classes.text}>
          Copyright &copy; 2020 Ian Schwartz
        </Typography>
      </BottomNavigation>
    </>
  );
};

export default Footer;
