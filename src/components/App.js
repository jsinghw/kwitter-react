import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Homepage, UserProfile, RegisterForm, MessageFeed } from ".";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/register" render={() => <RegisterForm />} />
        <Route exact path="/feed" render={() => <MessageFeed />} />
      </Switch>
    );
  }
}

export default App;
