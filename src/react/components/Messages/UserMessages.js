import React from "react";
import { Card, Avatar } from "antd";

import "antd/dist/antd.css";
const { Meta } = Card;

const users = [
  {
    pictureLocation: null,
    username: "jordansTest",
    displayName: "testing-account",
    about: "",
    googleId: null,
    createdAt: "2019-11-19T04:38:54.076Z",
    updatedAt: "2019-11-19T04:38:54.076Z"
  },
  {
    pictureLocation: null,
    username: "newguy",
    displayName: "newguy",
    about: "",
    googleId: null,
    createdAt: "2019-11-19T03:33:38.061Z",
    updatedAt: "2019-11-19T03:33:38.061Z"
  },
  {
    pictureLocation: null,
    username: "testchick",
    displayName: "testchick",
    about: "",
    googleId: null,
    createdAt: "2019-11-18T23:28:49.709Z",
    updatedAt: "2019-11-18T23:28:49.709Z"
  },
  {
    pictureLocation: null,
    username: "Testing1",
    displayName: "Testing1",
    about: "",
    googleId: null,
    createdAt: "2019-11-18T19:58:01.285Z",
    updatedAt: "2019-11-18T19:58:01.285Z"
  }
];
class UserMessages extends React.Component {
  render() {
    return users.map(user => {
      return (
        <React.Fragment>
          <Card size="small" style={{ width: 300 }}>
            <Meta
              avatar={
                user.pictureLocation ? (
                  user.pictureLocation
                ) : (
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                )
              }
              style={{ height: 20 }}
              title={user.displayName}
            />
            <div />
            {"@" + user.username}
            <p>MessageContent.....................</p>
          </Card>
        </React.Fragment>
      );
    });
  }
}

export default UserMessages;
