import React from "react";
import { Link } from "../components";
import pages from "../pages";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <p>Page not found for {this.props.location.pathname}</p>
        <Link to={pages.Home.path}>Go Home</Link>
      </>
    );
  }
}

export default NotFound;
