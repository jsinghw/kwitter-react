import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";
// import EditProfile from "../components/EditProfile/EditProfile";
// import ListOfUsers from "../components/ListOfUsers/ListOfUsers";
import { UserProfile } from '../components'

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UserProfile/>
        {/* <ListOfUsers /> */}
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
