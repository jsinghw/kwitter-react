import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";
import EditProfile from "../components/EditProfile/EditProfile";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <EditProfile />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
