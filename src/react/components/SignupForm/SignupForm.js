import React from "react";
import "./SignupForm.css";
import { Modal, Form, Input, Tooltip, Icon } from "antd";
import { withAsyncAction } from "../../HOCs";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new account"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item name="username" label="Username, 3-20 characters">
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Please input a username!" }]
              })(<Input placeholder="Username" />)}
            </Form.Item>
            <Form.Item
              name="displayName"
              label={
                <span>
                  Display Name, 3-20 characters&nbsp;
                  <Tooltip title="What do you want your name to appear as?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator("displayName", {
                rules: [
                  { required: true, message: "Please input a display name!" }
                ]
              })(<Input placeholder="Display Name" type="textarea" />)}
            </Form.Item>
            <Form.Item name="password" label="Password, 3-20 characters">
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input a password!"
                  }
                ]
              })(<Input placeholder="Password" type="password" />)}
            </Form.Item>
            <Form.Item label="Confirm Password">
              {getFieldDecorator("confirm password", {
                rules: [
                  {
                    required: true,
                    message: "Please confirm your password!"
                  }
                ]
              })(<Input placeholder="Confirm Password" type="password" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class Signup extends React.Component {
  state = {
    visible: false
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

      e.preventDefault();
      const userInfo = {
        username: values.username,
        displayName: values.displayName,
        password: values.password
      };
      this.props.createUser(userInfo);

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div className="signUpButton">
        <button type="button" onClick={this.showModal}>
          Sign up!
        </button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default withAsyncAction("users", "createUser")(Signup);