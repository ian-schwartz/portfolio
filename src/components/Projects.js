import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import artco from "../assets/laptop-macbook-pro-studentartco.png";
import parkpassport from "../assets/laptop-macbook-pro-park-passport.png";
import wanderlust from "../assets/laptop-macbook-pro-computer-wanderlust.png";
import imagegallery from "../assets/laptop-macbook-pro-image-gallery.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    color: "primary",
    variant: "outlined",
    fontSize: "1rem",
    margin: "5% 3%",
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <Nav />
      <div className="project-wrap">
        <div className="project-content">
          <h1 className="heading">PROJECTS.</h1>
          <div className="project-text">
            <h2>Here are a few selections of my work as a web developer.</h2>
            <h2>
              You can view some of my other projects on{" "}
              <a
                href="https://www.github.com/ian-schwartz"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Github
              </a>
              .
            </h2>
          </div>
          <div className="student-artco">
            <div className="student-artco-left">
              <img
                src={artco}
                className="project-img"
                alt="laptop displaying student artco site"
              />
            </div>
            <div className="student-artco-right">
              <h2 className="project-title">Student ArtCo</h2>
              <p className="about-paragraph">
                <em>Finalist at Lambda School Labs Demo Day 2020</em>
                <br /> <br />
                Student ArtCo is a platform that facilitates fund-raising for
                school's art programs by helping to sell art made by students.
                This web application was built over an eight week period by a
                remote, cross-functional team of five developers. Ian worked as
                a full-stack developer, contributing to both the front and
                backend.
                <br /> <br />
                Tech Stack: React, MaterialUI, Styled Components, Context API,
                Firebase Auth, Node.js, GraphQL, Apollo, SQLite3, Postgres
              </p>
              <Button
                className={classes.button}
                color="primary"
                variant="outlined"
                href="https://www.studentartco.com"
                target="_blank"
              >
                Visit
              </Button>{" "}
              <Button
                className={classes.button}
                color="primary"
                variant="outlined"
                href="https://github.com/ian-schwartz/student-art-collection-fe"
                target="_blank"
              >
                Code
              </Button>{" "}
              <Button
                className={classes.button}
                color="primary"
                variant="outlined"
                href="https://www.youtube.com/watch?v=e4LWqMgyp5g"
                target="_blank"
              >
                Video
              </Button>
            </div>
          </div>
          <div className="wanderlust">
            <div className="wanderlust-left">
              <h2 className="project-title">Wanderlust</h2>
              <p className="about-paragraph">
                Wanderlust helps tour guides advertise trips they offer and
                display their touring resume. Users can login, create, and
                update their trips. There is an on-boarding process for a new
                general user and for an organizer. Users can search for and find
                experiences while organizers have the ability to setup a trip
                and edit or delete it. Over four days, Ian built the backend
                with one other developer.
                <br /> <br />
                Tech Stack: React, React Router, Styled Components, Bootstrap,
                Reactstrap, Redux, Thunk, Axios, Node.js, Express, Knex, BCrypt,
                JWT, SQLite3, Postgres
              </p>
              <Button
                className={classes.button}
                color="primary"
                variant="outlined"
                href="https://wanderlust-bw.netlify.com/index.html"
                target="_blank"
              >
                Visit
              </Button>{" "}
              <Button
                className={classes.button}
                color="primary"
                variant="outlined"
                href="https://github.com/Build-Week-Wunderlust"
                target="_blank"
              >
                Code
              </Button>
            </div>
            <div className="wanderlust-right">
              <img
                src={wanderlust}
                className="project-img"
                alt="laptop displaying wanderlust site"
              />
            </div>
          </div>
          <div className="park-passport">
            <div className="park-passport-left">
              <img
                src={parkpassport}
                className="project-img"
                alt="laptop displaying park passport site"
              />
            </div>
            <div className="park-passport-right">
              <h2 className="project-title">Park Passport</h2>
              <p className="about-paragraph">
                Park Passport is a web application that allows users to create,
                edit, and delete listings and reviews for parks, as well as
                search them. This project was built in a cross discipline team
                over the course of four days. Ian worked as a lead React
                developer in order to create the frontend functionality of this
                application.
                <br /> <br />
                Tech Stack: React, React Router, Styled Components, Bootstrap,
                Reactstrap, Context API, Axios, Formik, Yup, Node.js, Express,
                Knex, BCrypt, JWT, SQLite3, Postgres
              </p>
              <Button
                className={classes.button}
                color="primary"
                variant="outlined"
                href="https://buildweek-parkpassport.github.io/ParkPassport-Landing-page/public/index.html"
                target="_blank"
              >
                Visit
              </Button>{" "}
              <Button
                className={classes.button}
                color="primary"
                variant="outlined"
                href="https://github.com/BuildWeek-ParkPassport"
                target="_blank"
              >
                Code
              </Button>
            </div>
          </div>
          <div className="image-gallery">
            <div className="image-gallery-left">
              <h2 className="project-title">4K Image Gallery</h2>
              <p className="about-paragraph">
                4K Image Gallery is a web application which utilizes the
                Unsplash API. Users can search and browse 1000's of high
                resolution images. It is fully responsive and contains features
                aimed to optimize user interaction and experience. Ian built
                this front end application as a personal project.
                <br /> <br />
                Tech Stack: React, React Bootstrap, Sass, Axios
              </p>
              <Button
                className={classes.button}
                color="primary"
                variant="outlined"
                href="https://4kimagegallery.netlify.app/"
                target="_blank"
              >
                Visit
              </Button>{" "}
              <Button
                className={classes.button}
                color="primary"
                variant="outlined"
                href="https://github.com/ian-schwartz/image-gallery"
                target="_blank"
              >
                Code
              </Button>
            </div>
            <div className="4k-image-gallery-right">
              <img
                src={imagegallery}
                className="project-img"
                alt="laptop displaying 4k gallery site"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
