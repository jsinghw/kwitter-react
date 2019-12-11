import React from "react";
import { withAsyncAction } from "../../HOCs";
import { Button, Icon } from "antd";
import "../EditProfile/EditProfile.css";
import { connect } from "react-redux";

class DeleteMessageButtonProfile extends React.Component {
  handleDeleteMessage = event => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (confirmed) {
      event.preventDefault();
      this.props.deleteProfileMessage(this.props.messageID, this.props.token);
    }
  };
  render() {
    return (
      <Button onClick={this.handleDeleteMessage} className="insideButton" type="danger">
        <Icon type="delete" />
      </Button>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.auth.login.result.token
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("messages", "deleteProfileMessage")(DeleteMessageButtonProfile)
);
