import React from "react";
import { Card, Button, Input, Avatar } from "antd";
import "antd/dist/antd.css";
import "./KweetCard.css";

const { TextArea } = Input;

class KweetCard extends React.Component {
  render() {
    return (
      <div className="container1">
        <Card className="card">
          <div className="row">
            <span>
              <Avatar
                className="profile"
                shape="circle"
                size={64}
                icon="user"
              />
              <span style={{ textAlign: "center" }}>
                <br />{" "}
              </span>
            </span>
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
