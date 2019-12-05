import React from "react";
import "./SignUp.css";
import { Modal, Form, Input } from "antd";

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
            <Form.Item >
              {getFieldDecorator("title", {
                rules: [{ required: true, message: "Please input a username!" }]
              })(<Input placeholder="Username" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("display name", {
                rules: [{ required: true, message: "Please input a display name!" }]
              })(<Input placeholder="Display Name" type="textarea" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Please input a password!" }]
              })(<Input placeholder="Password" type="password" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("confirm password", {
                rules: [{ required: true, message: "Please confirm your password!" }]
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

    // const { form } = this.formRef.props;
    // form.validateFields((err, values) => {
    //   if (err) {
    //     return;
    //   }

    //   console.log("Received values of form: ", values);
    //   form.resetFields();
    //   this.setState({ visible: false });
    // });

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
  };
};

export default Signup;
