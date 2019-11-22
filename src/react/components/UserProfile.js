import React from "react";
import { Avatar } from "antd";
import "antd/dist/antd.css";
import EditProfile from "./EditProfile/EditProfile";

// const user = {
//   user: {
//     pictureLocation: null,
//     username: "testuser",
//     displayName: "testuser",
//     about: "",
//     googleId: null,
//     createdAt: "2019-11-18T15:10:16.100Z",
//     updatedAt: "2019-11-18T15:10:16.100Z"
//   }
// };
class UserProfile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Avatar className="profile" shape="circle" size={100} icon="user" />
        <EditProfile/>
      </React.Fragment>
    );
  }
}

export default UserProfile;
