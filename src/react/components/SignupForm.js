import React from "react";
import { Modal, Button } from 'antd';

class SignupForm extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Sign Up
        </Button>
        <Modal
          title="Sign Up"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
            <input type="username" placeholder="Enter Username"></input>
            <input type="displayname" placeholder="Enter displayname"></input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Confirm Password"></input>
            <button type="Confirm">Sign Up Now!</button>
        </Modal>
      </div>
    );
  }
}

export default SignupForm