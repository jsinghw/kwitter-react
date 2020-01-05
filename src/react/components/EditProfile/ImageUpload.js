import React from "react";
import { withAsyncAction, connect } from "../../HOCs";
// import { Button } from "antd"

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
          {/* <Button key="submit" type="primary" ghost value="Upload Picture">Update Photo</Button> */}
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
