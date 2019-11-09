import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile, PageNotFound } from ".";
import { userIsAuthenticated, userIsNotAuthenticated } from "../HOCs";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={userIsNotAuthenticated(LoginForm)} />
        <Route
          exact
          path="/profile"
          component={userIsAuthenticated(UserProfile)}
        />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default App;
