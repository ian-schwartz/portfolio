import React from "react";
import Nav from "./Nav";
import { Button, OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  OutlinedInput: {
    margin: "1.5rem",
    width: "25%",
    [theme.breakpoints.down("sm")]: { width: "50%" },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <h1 className="heading">CONTACT ME.</h1>
      <div className="project-text">
        <h2>Drop me a line and I'll respond as soon as possible!</h2>
      </div>
      <form className="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <OutlinedInput
          name="name"
          placeholder="Name"
          required={true}
          className={classes.OutlinedInput}
        ></OutlinedInput>
        <OutlinedInput
          name="email"
          type="email"
          placeholder="Your Email Address"
          required={true}
          className={classes.OutlinedInput}
        ></OutlinedInput>
        <OutlinedInput
          name="message"
          placeholder="Message"
          required={true}
          className={classes.OutlinedInput}
          multiline={true}
          rows={5}
        ></OutlinedInput>
        <div data-netlify-recaptcha="true"></div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ margin: "1.5rem" }}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
