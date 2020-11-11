import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar className={classes.appBar}>
        {/* <Link to='/' className={classes.link}>
          <Button className={classes.button} id='home-btn'>
            Home
          </Button>
        </Link> */}

        <Toolbar className='nav-container'>
        <Link to='/'>
            <CodeIcon color='primary' fontSize='large' />
          </Link>
          <Button
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
          >
            <MenuIcon color='primary' fontSize='large' />
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              {" "}
              <Link to='/about' className={classes.link}>
                <Button className={classes.button}>About</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                href='https://resume.creddle.io/resume/bbjuttd019o'
                className={classes.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>
                  <Button className={classes.button}>Resume</Button>
                </span>
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to='/contact' className={classes.link}>
                <Button className={classes.button}>Contact</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to='/projects' className={classes.link}>
                <Button
                  color='primary'
                  variant='outlined'
                  className={classes.button}
                >
                  Projects
                </Button>
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
