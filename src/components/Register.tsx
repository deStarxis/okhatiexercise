import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    registerBtn: {
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

const Register = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<errorFields>({
    emailErr: "",
    passwordErr: "",
    confirmpasswordErr: "",
  });

  const handleRegister = () => {
    if (validation()) {
      setErrorMsg({ emailErr: "", passwordErr: "", confirmpasswordErr: "" });
      alert("Registration Successful");
      localStorage.setItem("submittedEmail", email);
      localStorage.setItem("submittedPassword", password);
      window.location.href = "/login";
    }
  };

  const validation = (): boolean => {
    let isValid = true;
    if (!email || !password || !confirmpassword) {
      if (!email && !password && !confirmpassword) {
        setErrorMsg({
          emailErr: "Email field must not be empty",
          passwordErr: "Password field must not be empty",
          confirmpasswordErr: "Confirm Password field must not be empty",
        });
        isValid = false;
      } else if (!email && !password) {
        setErrorMsg({
          emailErr: "Email field must not be empty",
          passwordErr: "Password field must not be empty",
          confirmpasswordErr: "",
        });
        isValid = false;
      } else if (!email && !confirmpassword) {
        setErrorMsg({
          emailErr: "Email field must not be empty",
          passwordErr: "",
          confirmpasswordErr: "Confirm Password field must not be empty",
        });
        isValid = false;
      } else if (!password && !confirmpassword) {
        setErrorMsg({
          emailErr: "",
          passwordErr: "Password field must not be empty",
          confirmpasswordErr: "Confirm Password field must not be empty",
        });
        isValid = false;
      } else if (!password) {
        setErrorMsg({
          emailErr: "",
          passwordErr: "Password field must not be empty",
          confirmpasswordErr: "",
        });
        isValid = false;
      } else if (!confirmpassword) {
        setErrorMsg({
          emailErr: "",
          passwordErr: "",
          confirmpasswordErr: "Confirm Password field must not be empty",
        });
        isValid = false;
      } else if (!email) {
        setErrorMsg({
          emailErr: "Email field must not be empty",
          passwordErr: "",
          confirmpasswordErr: "",
        });
        isValid = false;
      }
    }
    if (confirmpassword != password) {
      setErrorMsg({
        emailErr: "",
        passwordErr: "",
        confirmpasswordErr: "Password does not match",
      });
      isValid = false;
    }
    if (password) {
      var passwordPattern = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})");
      if (!passwordPattern.test(password)) {
        setErrorMsg({
          emailErr: "",
          passwordErr:
            "Password must contain at least eight characters with one letter and one number.",
          confirmpasswordErr: "",
        });
        isValid = false;
      }
    }

    if (email) {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email) && !password && !confirmpassword) {
        setErrorMsg({
          emailErr: "Please enter valid email address",
          passwordErr: "Password field must not be empty",
          confirmpasswordErr: "Confirm Password field must not be empty",
        });
        isValid = false;
      } else if (!pattern.test(email) && !password) {
        setErrorMsg({
          emailErr: "Please enter valid email address",
          passwordErr: "Password field must not be empty",
          confirmpasswordErr: "",
        });
        isValid = false;
      } else if (!pattern.test(email) && !confirmpassword) {
        setErrorMsg({
          emailErr: "Please enter valid email address",
          passwordErr: "",
          confirmpasswordErr: "Confirm Password field must not be empty",
        });
        isValid = false;
      } else if (!pattern.test(email)) {
        setErrorMsg({
          emailErr: "Please enter valid email address",
          passwordErr: "",
          confirmpasswordErr: "",
        });
        isValid = false;
      }
    }

    return isValid;
  };
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Register Form" />
        <CardContent>
          <div>
            <TextField
              error={!errorMsg.emailErr ? false : true}
              helperText={errorMsg.emailErr}
              fullWidth
              id="email"
              type="email"
              label="Email"
              placeholder="Email"
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
            <TextField
              error={!errorMsg.confirmpasswordErr ? false : true}
              helperText={errorMsg.confirmpasswordErr}
              fullWidth
              id="confirmpassword"
              type="password"
              label="Confirm Password"
              placeholder="Confirm Password"
              margin="normal"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.registerBtn}
            onClick={handleRegister}
          >
            Register
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default Register;
