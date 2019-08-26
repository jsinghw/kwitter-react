import React, { Component } from "react";
import { deleteMessage } from "../actions";
import { connect } from "react-redux";

class MessageList extends Component {
  render() {
    return this.props.messages.map(message => {
      return (
        <React.Fragment key={message.id}>
          <p>{message.username}</p>
          <p>{new Date(message.createdAt).toDateString()}</p>
          <p>{message.text}</p>
          <p>Number of likes: {message.likes.length}</p>
          <button onClick={event => this.props.deleteMessage(message.id)}>
            Delete
          </button>
        </React.Fragment>
      );
    });
  }
}

export default connect(
  null,
  { deleteMessage }
)(MessageList);
