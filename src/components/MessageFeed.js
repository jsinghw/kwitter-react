import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MessageList } from ".";
import { getMessages } from "../actions";
import { connect } from "react-redux";

class MessageFeed extends Component {
  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    return (
      <>
        <Link to="/profile">
          <button>My Profile</button>
        </Link>
        <MessageList messages={this.props.messages} />
      </>
    );
  }
}

export default connect(
  state => {
    return {
      messages: state.messages.getMessages
    };
  },
  { getMessages }
)(MessageFeed);
