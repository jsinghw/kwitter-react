import React from "react";
import { Menu, UserProfile } from "../components";
import { userIsAuthenticated } from "../HOCs";
import ListOfUsers from "../components/ListOfUsers/ListOfUsers";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UserProfile/>
        <br/>
        <ListOfUsers />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
