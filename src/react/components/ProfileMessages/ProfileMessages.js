import React from "react";
import { Avatar, Card, Typography } from "antd";
import { withAsyncAction } from "../../HOCs";
import { Spinner, DeleteMessageButtonProfile } from "..";
import { domain } from "../../../redux/actionCreators/constants";
const { Paragraph } = Typography;

class ProfileMessages extends React.Component {
  componentDidMount() {
    this.props.getUserMessages(this.props.username);
  }
  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      this.props.getUserMessages(this.props.username);
    }
  }

  render() {
    if (this.props.result === null) {
      return (
        <div>
          <Spinner name="circle" color="blue" />
        </div>
      );
    }
    const getMessages = this.props.result.messages;
    return getMessages.map(message => {
      return (
        <div className="container1" key={message.id}>
          <Card className="card">
            <span className="row">
              <div>
                <Avatar
                  className="profile"
                  shape="circle"
                  size={64}
                  icon="user"
                  src={`${domain}/users/${message.username}/picture`}
                />
                <div style={{ textAlign: "center" }}>
                  <br />{" "}
                </div>
              </div>
              <div className="row">
                <h3 style={{ fontWeight: "bold" }}>{message.username}</h3>
              </div>
              <div className="p1">
                <p>@{message.username}</p>
                <Paragraph ellipsis={{ rows: 2, expandable: false }}>
                  {message.text}
                </Paragraph>
              </div>
              <span style={{ paddingLeft: 200 }}>
                <DeleteMessageButtonProfile messageID={message.id} />
              </span>
            </span>
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

export default withAsyncAction("messages", "getUserMessages")(ProfileMessages);
