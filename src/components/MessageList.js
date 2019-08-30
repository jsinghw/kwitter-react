import React, { Component } from "react";
import { deleteMessage, toggleLike } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MessageList extends Component {
  render() {
    return this.props.messages.map(message => {
      const isDeletable = message.username === this.props.username;
      const isLiked = message.likes.some(
        like => like.username === this.props.username
      );
      return (
        <React.Fragment key={message.id}>
          <Link to={"/profile/" + message.username}>
            <p>{message.username}</p>
          </Link>
          <p>{new Date(message.createdAt).toDateString()}</p>
          <p>{message.text}</p>
          <p>Number of likes: {message.likes.length}</p>
          <button onClick={event => this.props.toggleLike(message.id)}>
            {isLiked ? "Unlike" : "Like"}
          </button>
          {isDeletable && (
            <button onClick={event => this.props.deleteMessage(message.id)}>
              Delete
            </button>
          )}
        </React.Fragment>
      );
    });
  }
}

export default connect(
  state => {
    return {
      username: state.auth.login.username
    };
  },
  { deleteMessage, toggleLike }
)(MessageList);
