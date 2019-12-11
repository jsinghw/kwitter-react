import React from "react";
import { Avatar, Card } from "antd";
import "antd/dist/antd.css";
import "./UserProfile.css";
import EditProfile  from "../EditProfile/EditProfile";
import { withAsyncAction } from "../../HOCs";
import { Spinner } from "..";
import {domain} from "../../../redux/actionCreators/constants"

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.username);
  }
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      this.props.getProfile(this.props.username);
    }
  }

  render() {
    if (this.props.result === null) {
      return <Spinner className="spinner" name="circle" color="blue" />;
    }
    const username = JSON.parse(localStorage.login).result.username;
    const profile = this.props.result.user;
    return (
      <React.Fragment>
        <div className="profile">
          <Card>
            <div>
              <span>
                <Avatar
                  size={64}
                  shape="circle"
                  icon="user"
                  src={
                   domain + profile.pictureLocation
                  }
                />
                <span className="profileHeader">{profile.displayName}</span>
              </span>
            </div>
            {username === profile.username && (
              <EditProfile className="editProfile" />
            )}
            <hr />
            <span className="contentWrapper">
              <span>
                Display Name: <span>{profile.displayName}</span>
              </span>
              <span>
                Account Created: {new Date(profile.createdAt).toDateString()}
              </span>
            </span>
            <span>
              About:
              {profile.about ? profile.about : "You do not have a bio set up"}
            </span>
          </Card>
        </div>
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
