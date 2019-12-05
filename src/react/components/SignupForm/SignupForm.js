import React from "react";
import "./SignupForm.css";
import { Modal, Form, Input, Tooltip, Icon } from "antd";
import { withAsyncAction } from "../../HOCs";

const CollectionCreateForm = Form.create({
  name: "form_in_modal",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value
      }),
      displayName: Form.createFormField({
        ...props.displayName,
        value: props.displayName.value
      }),
      password: Form.createFormField({
        ...props.password,
        value: props.password.value
      })
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  }
})(props => {
  // const { visible, onCancel, onCreate } = this.props;
  const { getFieldDecorator } = props.form;
  return (
    <Modal
      visible={this.state.visible}
      title="Create a new account"
      okText="Create"
      onCancel={this.onCancel}
      onOk={this.onCreate}
    >
      <Form layout="vertical">
        <Form.Item label="Username, 3-20 characters">
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input a username!" }]
          })(<Input placeholder="Username" />)}
        </Form.Item>
        <Form.Item
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
            rules: [{ required: true, message: "Please input a display name!" }]
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

  handleCreate = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields }
    }));
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
    const { fields } = this.state;
    return (
      <div className="signUpButton">
        <button type="button" onClick={this.showModal}>
          Sign up!
        </button>
        <CollectionCreateForm
          {...fields}
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
