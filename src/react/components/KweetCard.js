import React from "react";
import { Card } from "antd";

const users =[
    {
      "pictureLocation": null,
      "username": "jordansTest",
      "displayName": "testing-account",
      "about": "",
      "googleId": null,
      "createdAt": "2019-11-19T04:38:54.076Z",
      "updatedAt": "2019-11-19T04:38:54.076Z"
    },
    {
      "pictureLocation": null,
      "username": "newguy",
      "displayName": "newguy",
      "about": "",
      "googleId": null,
      "createdAt": "2019-11-19T03:33:38.061Z",
      "updatedAt": "2019-11-19T03:33:38.061Z"
    },
    {
      "pictureLocation": null,
      "username": "testchick",
      "displayName": "testchick",
      "about": "",
      "googleId": null,
      "createdAt": "2019-11-18T23:28:49.709Z",
      "updatedAt": "2019-11-18T23:28:49.709Z"
    },
    {
      "pictureLocation": null,
      "username": "Testing1",
      "displayName": "Testing1",
      "about": "",
      "googleId": null,
      "createdAt": "2019-11-18T19:58:01.285Z",
      "updatedAt": "2019-11-18T19:58:01.285Z"
    },
    {
      "pictureLocation": null,
      "username": "test2",
      "displayName": "Shaquon",
      "about": "",
      "googleId": null,
      "createdAt": "2019-11-18T19:49:55.705Z",
      "updatedAt": "2019-11-18T19:49:55.705Z"
    },
    {
      "pictureLocation": null,
      "username": "GreenArrow",
      "displayName": "GreenArrow",
      "about": "",
      "googleId": null,
      "createdAt": "2019-11-18T19:49:40.414Z",
      "updatedAt": "2019-11-18T19:49:40.414Z"
    },
    {
      "pictureLocation": null,
      "username": "chrisTest",
      "displayName": "string",
      "about": "I'ma justa testin'",
      "googleId": null,
      "createdAt": "2019-11-18T17:38:54.749Z",
      "updatedAt": "2019-11-18T17:44:31.820Z"
    }];
class KweetCard extends React.Component {
  render() {
     return users.map(user=>{
         return(
         <Card
        title={user.displayName}
        extra={<a href="#">@{user.username}</a>}
        style={{ width: 300 }}
      >
        <p>MessageContent.....</p>
        <p>...................</p>
     
      </Card>
     )})}}

export default KweetCard;
