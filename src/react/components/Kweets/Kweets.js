import { Comment, Tooltip, Avatar, Card } from "antd";
import moment from "moment";
import React from "react";
import "../KweetCard/KweetCard.css";
import { withAsyncAction } from "../../HOCs";
import { Spinner, Link, DeleteMessageButton } from "..";
import { domain } from "../../../redux/actionCreators/constants";

class Kweets extends React.Component {
  componentDidMount() {
    this.props.getUserMessages();
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
      const username = JSON.parse(localStorage.login).result.username;

      const actions = [
        <span key={"comment-basic-like"}>
          <span style={{ paddingLeft: 8, cursor: "auto" }}>
            <span style={{ paddingLeft: 200 }}>
              {username === message.username && (
                <DeleteMessageButton messageID={message.id} />
              )}
            </span>
          </span>
        </span>
      ];

      return (
        <div style={{ marginLeft: 20 }} className="container1" key={message.id}>
          <Card className="card">
            <div className="row">
              <Comment
                actions={actions}
                author={
                  <Link
                    to={`/profile/${message.username}`}
                    style={{ marginLeft: 0 }}
                  >
                    {message.username}
                  </Link>
                }
                avatar={
                  <Link
                    to={`/profile/${message.username}`}
                    style={{ marginLeft: 0 }}
                  >
                    <Avatar
                      icon="user"
                      src={`${domain}/users/${message.username}/picture`}
                      alt="Han Solo"
                    />
                  </Link>
                }
                content={
                  message.text ? (
                    message.text
                  ) : (
                    <p>
                      We supply a series of design principles, practical
                      patterns and high quality design resources (Sketch and
                      Axure), to help people create their product prototypes
                      beautifully and efficiently.
                    </p>
                  )
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment(message.createdAt).fromNow()}</span>
                  </Tooltip>
                }
              />
            </div>
          </Card>
        </div>
      );
    });
  }
}

export default withAsyncAction("messages", "getUserMessages")(Kweets);
