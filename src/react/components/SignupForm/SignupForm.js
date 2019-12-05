import React from "react";
import "./SignupForm.css";
import { Modal, Form, Input, Tooltip, Icon } from "antd";
import { withAsyncAction } from "../../HOCs";

const SignUpForm = Form.create({
  name: 'global_state',
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value,
      }),
      displayName: Form.createFormField({
        ...props.displayName,
        value: props.displayName.value,
      }),
      password: Form.createFormField({
        ...props.password,
        value: props.password.value,
      }),
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})(props => {
  const { getFieldDecorator } = props.form;
  return (
    <Form layout="vertical">
      <Form.Item label="Username, 3-20 Characters">
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input placeholder="username" type="textarea" />)}
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
  );
});

class Signup extends React.Component {
  state = {
    visible: false,
    fields: {
      username: {
        value: ""
      },
      displayName: {
        value: ""
      },
      password: {
        value: ""
      }
    }
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  
  render() {
    const { visible, form } = this.props;
    const { getFieldDecorator } = form;
    const { fields } =
    return (
      <div className="signUpButton">
        <button type="button" onClick={this.showModal}>
          Sign up!
        </button>
        <Modal
          visible={visible}
          title="Create a new account"
          okText="Create"
          onCancel={this.handleCancel}
          onOk={this.handleFormChange}
        >

        </Modal>
      </div>
    );
  }
}

export default withAsyncAction("users", "createUser")(Signup);
