import React from "react";
import { Avatar, Button, Card, Typography } from "antd";
import { withAsyncAction } from "../../HOCs";
import { Spinner } from "..";

const { Paragraph } = Typography;

class profileMessages extends React.Component {
  componentDidMount() {
    this.props.getlistofusers();
  }
  render() {
    if (this.props.result === null) {
      return <div><Spinner name="circle" color="blue" /></div>
    }
    const getUser = this.props.result.users;
    return getUser.map(user => {
      return (
        <div className="container1">
          <Card className="card">
            <span className="row">
              <div>
                <Avatar
                  className="profile"
                  shape="circle"
                  size={64}
                  icon="user"
                />
                <div style={{ textAlign: "center" }}>
                  <br />{" "}
                </div>
              </div>
              <div className="row">
                <h3 style={{ fontWeight: "bold" }}>{user.displayName}</h3>
              </div>
              <div className="p1">
                <p>@{user.username}</p>
                <Paragraph ellipsis={{ rows: 2, expandable: false }}>
                  {user.about
                    ? getUser.about
                    : "This user has not set up an about"}
                </Paragraph>
              </div>
            </span
          </Card>
        </div>
      );
    });
  }
}
//this.props
//mapstatetoprops
//sucess
//start
//fail
//

export default withAsyncAction("usermessages", "getUserMessages")(profileMessages);
