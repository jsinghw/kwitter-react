import React, { Component } from "react";
import { LoginForm } from ".";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <LoginForm />
      </>
    );
  }
}

export default Homepage;
