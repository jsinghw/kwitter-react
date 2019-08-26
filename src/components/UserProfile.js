import React, { Component } from "react";
import { connect } from "react-redux";
import {
  logoutThenGoToHomepage as logout,
  getLoggedInUserProfileInfo,
  uploadUserPictureThenGetLoggedInUser as uploadPicture
} from "../actions";
import { Link } from "react-router-dom";
import { MessageList } from ".";

class UserProfile extends Component {
  // this.props.getUser
  componentDidMount() {
    this.props.getLoggedInUserProfileInfo();
  }

  handleUploadPicture = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.props.uploadPicture(formData);
  };

  render() {
    return (
      <>
        <Link to="/feed">
          <button>Message Feed</button>
        </Link>
        This is the user profile
        <img
          alt="profile"
          src={
            "https://kwitter-api.herokuapp.com" +
            this.props.user.pictureLocation
          }
        />
        <p>Username: {this.props.user.username}</p>
        <p>Display Name: {this.props.user.displayName}</p>
        <p>About: {this.props.user.about}</p>
        <p>Created: {new Date(this.props.user.createdAt).toDateString()}</p>
        <p>Updated: {new Date(this.props.user.updatedAt).toDateString()}</p>
        <form onSubmit={this.handleUploadPicture}>
          <input name="picture" type="file" />
          <button type="submit">Upload Picture</button>
        </form>
        <button onClick={this.props.logout}>Logout</button>
        <MessageList messages={this.props.messages} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.getUser,
    messages: state.messages.getUserMessages
  };
};

export default connect(
  mapStateToProps,
  { logout, getLoggedInUserProfileInfo, uploadPicture }
)(UserProfile);
