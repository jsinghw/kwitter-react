import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutThenGoToHomepage as logout, getLoggedInUser } from "../actions";

class UserProfile extends Component {
  // this.props.getUser
  componentDidMount() {
    this.props.getLoggedInUser();
  }

  render() {
    return (
      <p>
        This is the user profile
        <p>Username: {this.props.user.username}</p>
        <p>Display Name: {this.props.user.displayName}</p>
        <p>About: {this.props.user.about}</p>
        <button onClick={this.props.logout}>Logout</button>
      </p>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.getUser
  };
};

export default connect(
  mapStateToProps,
  { logout, getLoggedInUser }
)(UserProfile);
