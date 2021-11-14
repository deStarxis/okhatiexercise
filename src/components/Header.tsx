import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
    logo: {
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  })
);

function Navbar() {
  const loginToken = localStorage.getItem("loginToken");
  const submittedEmail = localStorage.getItem("submittedEmail");
  const submittedPassword = localStorage.getItem("submittedPassword");
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Okhati Exercise
        </Typography>
        <div className={classes.navlinks}>
          {loginToken ? (
            <>
              <NavLink to="/" className={classes.link}>
                Home
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" className={classes.link}>
                Login
              </NavLink>
              <NavLink to="/register" className={classes.link}>
                Register
              </NavLink>
            </>
          )}
          {/* {!loginToken && (
            <>
              <NavLink to="/login" className={classes.link}>
                Login
              </NavLink>
              <NavLink to="/register" className={classes.link}>
                Register
              </NavLink>
            </>
          )} */}
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
