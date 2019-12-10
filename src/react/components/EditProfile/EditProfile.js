import React from "react";
import { connect } from "react-redux";
import ImageUpload from "./ImageUpload";
import { Modal, Button, Input, Form } from "antd";
import "antd/dist/antd.css";
import "./EditProfile.css";
import withAsyncAction from "../../HOCs/withAsyncAction";
import DeleteUserButton from "../DeleteUserButton/DeleteUserButton";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Update Your User Info"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <ImageUpload />
            <Form.Item label="Display Name">
              {getFieldDecorator("displayName")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Bio">
              {getFieldDecorator("about")(<Input type="textarea" />)}
            </Form.Item>
          </Form>
          <DeleteUserButton />
        </Modal>
      );
    }
  }
);

class EditProfile extends React.Component {
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
        username: this.props.username,
        displayName: values.displayName,
        about: values.about
      };
      this.props.patchUser(userInfo);

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
      <div>
        <Button type="primary" onClick={this.showModal}>
          Update Info
        </Button>
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

// const { TextArea } = Input;

// class EditProfile extends React.Component {
//   state = {
//     loading: false,
//     visible: false,
//     displayName: "",
//     about: ""
//   };

//   showModal = () => {
//     this.setState({
//       visible: true
//     });
//   };

//   handleOk = () => {
//     this.setState({ loading: true });
//     setTimeout(() => {
//       this.setState({ loading: false, visible: false });
//     }, 3000);
//   };

//   handleCancel = () => {
//     this.setState({ visible: false });
//   };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleUpdate = e => {
//     e.preventDefault();
//     console.log(this.state.about);
//     this.props.patchUser(
//       this.state.about,
//       this.state.displayName,
//       this.props.username
//     );
//   };

//   render() {
//     const { visible, loading } = this.state;
//     return (
//       <div className="editProfile">
//         <Button type="primary" onClick={this.showModal}>
//           Edit Profile
//         </Button>
//         <Modal
//           visible={visible}
//           title="Update your profile"
//           onOk={this.handleOk}
//           onCancel={this.handleCancel}
//           footer={[
//             <Button key="back" onClick={this.handleCancel}>
//               Return
//             </Button>,
//             <Button
//               key="submit"
//               type="primary"
//               loading={loading}
//               onClick={this.handleOk}
//             >
//               Submit
//             </Button>
//           ]}
//         >
//           <span>
//             <ImageUpload />
//             <div style={{ textAlign: "center" }}>
//               <br />{" "}
//             </div>
//           </span>
//           <Input name="displayName" placeholder="Update Display Name" /> <br />
//           <br />
//           <TextArea name="about" rows={4} placeholder="Bio" /> <br />
//           <br />
//           <Input placeholder="Location" />{" "}
//           <div className="row container">
//             <DeleteUserButton username={this.props.username}></DeleteUserButton>
//             <Button
//               className="insideButton"
//               type="primary"
//               ghost
//               onClick={this.handleUpdate}
//             >
//               Update
//             </Button>
//           </div>
//         </Modal>
//       </div>
//     );
//   }
// }

const mapStateToProps = state => {
  return {
    username: state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("users", "patchUser")(EditProfile)
);
