import React from "react";
import {Menu} from "../components";
import { userIsAuthenticated } from "../HOCs";
import EditProfile from "../components/EditProfile/EditProfile";
import UserProfile from "../components/UserProfile"

class Profile extends React.Component {


  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UserProfile />
        
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
