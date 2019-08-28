import React, { Component } from "react";
import { connect } from "react-redux";
import {
  logoutThenGoToHomepage as logout,
  getLoggedInUserProfileInfo,
  uploadUserPictureThenGetLoggedInUser as uploadPicture,
  updateUser
} from "../actions";
import { Link } from "react-router-dom";
import { MessageList } from ".";

class UserProfile extends Component {
  state = {
    password: "",
    about: "",
    displayName: ""
  };

  componentDidMount() {
    this.props.getLoggedInUserProfileInfo();
  }

  handleUploadPicture = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.props.uploadPicture(formData);
  };

  handleUpdateUser = event => {
    event.preventDefault();
    this.props.updateUser(this.state);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <Link to="/feed">
          <button>Message Feed</button>
        </Link>
        <button onClick={this.props.logout}>Logout</button>
        This is the user profile
        <img
          alt="profile"
          src={
            "https://kwitter-api.herokuapp.com" +
            this.props.user.pictureLocation
          }
        />
        <form onSubmit={this.handleUploadPicture}>
          <input name="picture" type="file" />
          <button type="submit">Upload Picture</button>
        </form>
        <p>Username: {this.props.user.username}</p>
        <p>Display Name: {this.props.user.displayName}</p>
        <p>About: {this.props.user.about}</p>
        <p>Created: {new Date(this.props.user.createdAt).toDateString()}</p>
        <p>Updated: {new Date(this.props.user.updatedAt).toDateString()}</p>
        <h2>Update your user info</h2>
        <form onSubmit={this.handleUpdateUser}>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" onChange={this.handleChange} />
          <label htmlFor="about">About</label>
          <input type="text" name="about" onChange={this.handleChange} />
          <label htmlFor="displayName">Display Name</label>
          <input type="text" name="displayName" onChange={this.handleChange} />
          <button type="submit">Submit Updates</button>
        </form>
        <h2>Your Messages</h2>
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
  { logout, getLoggedInUserProfileInfo, uploadPicture, updateUser }
)(UserProfile);
