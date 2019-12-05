import React from "react";
import "./SignupForm.css";
import { Modal, Form, Input, Tooltip, Icon } from "antd";
import { withAsyncAction } from "../../HOCs";

    handleCreateUser = e => {
      e.preventDefault();
      this.props.createUser(this.state);
    }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

class Signup extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = e => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  
  render() {
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className="signUpButton">
        <button type="button" onClick={this.showModal}>
          Sign up!
        </button>
        <Modal
          visible={visible}
          title="Create a new account"
          okText="Create"
          onCancel={handleCancel}
          onOk={handleCreate}
        >
          <Form layout="vertical">
            <Form.Item name="username" label="Username, 3-20 characters">
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Please input a username!" }]
              })(<Input placeholder="Username" />)}
            </Form.Item>
            <Form.Item name="displayName" label={
              <span>
                Display Name, 3-20 characters&nbsp;
                <Tooltip title="What do you want your name to appear as?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span> 
            }>
              {getFieldDecorator("display name", {
                rules: [{ required: true, message: "Please input a display name!" }]
              })(<Input placeholder="Display Name" type="textarea" />)}
            </Form.Item>
            <Form.Item name="password" label="Password, 3-20 characters">
              {getFieldDecorator("password", {
                rules: [
                  { 
                    required: true, message: "Please input a password!" },
                ]
              })(<Input placeholder="Password" type="password" />)}
            </Form.Item>
            <Form.Item label="Confirm Password">
              {getFieldDecorator("confirm password", {
                rules: [
                  { 
                    required: true, message: "Please confirm your password!" 
                  },
                ]
              })(<Input placeholder="Confirm Password" type="password" />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default withAsyncAction("users", "createUser")(Signup);
