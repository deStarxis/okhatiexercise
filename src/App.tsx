import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  const loginToken = localStorage.getItem("loginToken");
  const submittedEmail = localStorage.getItem("submittedEmail");
  const submittedPassword = localStorage.getItem("submittedPassword");

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {!loginToken && !submittedEmail && !submittedPassword && (
            <>
              <Route exact path="/register" component={Register} />
              <Redirect to="/register" />
            </>
          )}
          {!loginToken && (
            <>
              <Route exact path="/login" component={Login} />
              <Redirect to="/login" />
            </>
          )}
          {loginToken && (
            <>
              <Route exact path="/" component={Home} />
              <Redirect to="/" />
            </>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
