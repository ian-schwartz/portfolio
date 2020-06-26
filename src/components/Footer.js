import React from "react";
import { BottomNavigation, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    fontFamily: "Source Sans Pro",
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "3%",
    backgroundColor: "#3f51b5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontFamily: "Source Sans Pro",
    fontSize: "1rem",
    color: "#000",
    [theme.breakpoints.down("sm")]: { fontSize: ".725rem" },
  },
}));

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
