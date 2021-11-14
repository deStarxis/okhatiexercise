import React, { useEffect, useReducer, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<errorFields>({
    emailErr: "",
    passwordErr: "",
    loginErr: "",
  });

  const handleLogin = () => {
    if (validation()) {
      setErrorMsg({ emailErr: "", passwordErr: "" });
      if (
        email !== localStorage.getItem("submittedEmail") ||
        password !== localStorage.getItem("submittedPassword")
      ) {
        setErrorMsg({
          emailErr: "",
          passwordErr: "",
          loginErr: "Invalid Credentials",
        });
      } else {
        alert("Login Successful");
        localStorage.setItem("loginToken", email + password);
        window.location.href = "/";
      }
    }
  };
  const validation = (): boolean => {
    let isValid = true;
    if (!email || !password) {
      if (!email && !password) {
        setErrorMsg({
          emailErr: "Email field must not be empty",
          passwordErr: "Password field must not be empty",
        });
        isValid = false;
      } else if (!password) {
        setErrorMsg({
          emailErr: "",
          passwordErr: "Password field must not be empty",
        });
        isValid = false;
      } else if (!email) {
        setErrorMsg({
          emailErr: "Email field must not be empty",
          passwordErr: "",
        });
        isValid = false;
      }
    }
    if (email) {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email) && !password) {
        setErrorMsg({
          emailErr: "Please enter valid email address",
          passwordErr: "Password field must not be empty",
        });
        isValid = false;
      } else if (!pattern.test(email)) {
        setErrorMsg({
          emailErr: "Please enter valid email address",
          passwordErr: "",
        });
        isValid = false;
      }
    }

    return isValid;
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login App" />
        <CardContent>
          <div>
            <TextField
              error={!errorMsg.emailErr ? false : true}
              helperText={errorMsg.emailErr}
              fullWidth
              id="email"
              type="email"
              label="email"
              placeholder="email"
              margin="normal"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              error={!errorMsg.passwordErr ? false : true}
              helperText={errorMsg.passwordErr}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardActions>
        <CardActions>
          <Typography variant="caption" display="block" gutterBottom>
            {errorMsg.loginErr}
          </Typography>
        </CardActions>
      </Card>
    </form>
  );
};

export default Login;
