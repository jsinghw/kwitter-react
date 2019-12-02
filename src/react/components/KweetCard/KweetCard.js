import React from "react";
import { Card, Button, Input, Avatar } from "antd";
import "antd/dist/antd.css";
import "./KweetCard.css";

const { TextArea } = Input;

class KweetCard extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 20}} className="container1">
      <div><h1>KweetFeed</h1></div>
        <Card className="card">
          <div className="row">
            <div>
              <Avatar
                className="profile"
                shape="circle"
                size={64}
                icon="user"
              />
              <span style={{ textAlign: "center" }}>
                <br />{" "}
              </span>
            </div>
            <TextArea rows={4} placeholder="What's happening?" />{" "}
          </div>
          <div className="button">
            <Button type="primary">Kweet</Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default KweetCard;
