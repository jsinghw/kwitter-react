import React from "react";
import { Avatar, Button, Card, Typography } from "antd";
import "../ListOfUsers/ListOfUsers.css";

const { Paragraph } = Typography;

class ListOfUsers extends React.Component {
  render() {
    return (
      <div className="container1">
        <Card className="card">
          <div className="row ">
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
            <div className="row">
              <h3 style={{ fontWeight: "bold" }}>Test User</h3>
            </div>
            <div className="p1">
              <p>@TestUser</p>
              <Paragraph ellipsis={{ rows: 2, expandable: false }}>
                Users Headline...........!!
              </Paragraph>
            </div>
          </div>
          <div className="button">
            <Button type="primary">Follow</Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default ListOfUsers;
