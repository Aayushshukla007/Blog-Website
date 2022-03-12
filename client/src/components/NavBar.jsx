import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    backgroundColor: "#ffffff",
    color: "black",
  },
  container: {
    justifyContent: "center",
    "&>*": {
      padding: 20,
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});
const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to={"/"} className={classes.link}>
          <Typography>Home</Typography>
        </Link>
        <Typography>About</Typography>
        <Typography>Contact</Typography>
        <Link to={"/auth"} className={classes.link}>
          <Typography>Login</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
