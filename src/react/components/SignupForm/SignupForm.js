import React from "react";
import "./SignupForm.css";
import { Modal, Form, Input, Tooltip, Icon } from "antd";

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
            <Form.Item label="Username, 3-20 characters">
              {getFieldDecorator("title", {
                rules: [{ required: true, message: "Please input a username!" }]
              })(<Input placeholder="Username" />)}
            </Form.Item>
            <Form.Item label={
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
            <Form.Item label="Password, 3-20 characters">
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

  handleCreate = () => {
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

export default Signup;
