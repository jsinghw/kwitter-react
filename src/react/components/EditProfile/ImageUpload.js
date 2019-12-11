import React from "react";
import { withAsyncAction, connect } from "../../HOCs";

class ImageUpload extends React.Component {
  handleUploadUserPicture = event => {
    console.log("upload activated");
    event.preventDefault();
    this.props.putUserPicture(event.target);
  };

  render() {
    return (
        <form onSubmit={this.handleUploadUserPicture}>
          <input type="file" name="picture" />
          <input type="submit" value="Upload Picture" />
        </form>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(withAsyncAction("users","putUserPicture")(ImageUpload));
