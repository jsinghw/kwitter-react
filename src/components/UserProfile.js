import React, { Component } from "react";
import { connect } from "react-redux";
import {
  logoutThenGoToHomepage as logout,
  getLoggedInUserProfileInfo,
  uploadUserPicture as uploadPicture
} from "../actions";

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
        This is the user profile
        <img
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
        {this.props.messages.map(message => {
          return (
            <React.Fragment key={message.id}>
              <p>{message.username}</p>
              <p>{new Date(message.createdAt).toDateString()}</p>
              <p>{message.text}</p>
              <p>Number of likes: {message.likes.length}</p>
            </React.Fragment>
          );
        })}
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
