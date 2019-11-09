import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageNotFound extends Component {
  render() {
    return (
      <>
        <p>Page not found for {this.props.location.pathname}</p>
        <Link to="/">Go Home</Link>
      </>
    );
  }
}

export default PageNotFound;
