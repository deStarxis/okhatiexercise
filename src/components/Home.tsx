import { Card, CardActions, Button, Typography } from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    header: {
      textAlign: "center",
      background: "#212121",
      color: "#fff",
    },
    card: {
      marginTop: theme.spacing(10),
    },
  })
);
function Home() {
  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    window.location.href = "/login";
  };
  const classes = useStyles();
  const loginToken = localStorage.getItem("loginToken");

  return (
    <>
      {loginToken === null ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <Card className={classes.container}>
            <CardActions>
              <Typography variant="h6" display="block" gutterBottom>
                Welcome to Home Page
              </Typography>
            </CardActions>
            <CardActions>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                className={classes.loginBtn}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </CardActions>
          </Card>
        </div>
      )}
    </>
  );
}

export default Home;
