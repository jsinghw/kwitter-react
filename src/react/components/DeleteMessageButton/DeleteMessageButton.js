import React from "react";
import { withAsyncAction } from "../../HOCs";
import { Button, Icon } from "antd";
import "../EditProfile/EditProfile.css";
import { connect } from "react-redux";

class DeleteMessageButton extends React.Component {
  handleClick = event => {
    event.preventDefault();
    this.props.deleteMessage(this.props.messageID, this.props.token);
  };

  render() {
    return (
      <Button onClick={this.handleClick} className="insideButton" type="danger">
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
  withAsyncAction("messages", "deleteMessage")(DeleteMessageButton)
);
