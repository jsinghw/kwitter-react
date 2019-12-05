import React from "react";
import { Avatar, Card } from "antd";
import "antd/dist/antd.css";
import "./UserProfile.css";
import EditProfile from "../EditProfile/EditProfile";
import { withAsyncAction } from "../../HOCs";
import { Spinner } from "..";

class UserProfile extends React.Component {
  componentDidMount(){
    this.props.getProfile(this.props.username);
  };

  render() {
    if (this.props.result === null) {
      return <Spinner className="spinner" name="circle" color="blue" />;
    }
    const profile = this.props.result.user;
    return (
      <React.Fragment>
        <span className="Wrapper">
          <span className="headerWrapper">
            <Avatar className="profile" shape="circle" size={100} icon={profile.pictureLocation?profile.pictureLocation :"user"} />
            <span className="profileHeader">{profile.displayName}</span>
            <EditProfile /> 
          </span>
          <span className="contentWrapper">
            <span>User Name: <span>{profile.username}</span></span>
            <span>Account Created: {new Date(profile.createdAt).toDateString()}</span>
          </span>
            <span>About: {profile.about ? profile.about : "You do not have a Bio setup"}</span>
        </span>
      </React.Fragment>
    );
  }
}

//mapStateToProps
//loading
//error
//result

//mapDispatchToProps
//login
//

export default withAsyncAction("users", "getProfile")(UserProfile);
