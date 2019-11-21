import React from "react";
import { Avatar, Descriptions } from "antd";
import "antd/dist/antd.css";


const user = {
  pictureLocation: null,
  username: "testuser",
  displayName: "testuser",
  about: "dfbiojsboiwjtboirjtbnrwoihjtoinjwoiwrjt",
  googleId: null,
  createdAt: "2019-11-18T15:10:16.100Z",
  updatedAt: "2019-11-18T15:10:16.100Z"
};

class UserProfile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Avatar
          className="profile"
          shape="circle"
          size={100}
          icon={
            user.pictureLocation ? (
              user.pictureLocation
            ) : (
              <Avatar
                size={86}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            )
          }
        />
        <Descriptions id="ProfileHeader" colon = {false} size = "small" title={user.displayName}>
          <div>@{user.username}</div>
          <Descriptions.Item label="About">{user.about}</Descriptions.Item>
          <Descriptions.Item label="Account Created :">
            {user.createdAt}
          </Descriptions.Item>
        </Descriptions>
        
      </React.Fragment>
    );
  }
}

export default UserProfile;
