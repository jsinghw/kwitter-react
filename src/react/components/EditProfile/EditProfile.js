import React from "react";
import ImageUpload from "./ImageUpload";
import { Modal, Button, Input, Form } from "antd";
import "antd/dist/antd.css";
import "./EditProfile.css";
import withAsyncAction from "../../HOCs/withAsyncAction";
import DeleteUserButton from "../DeleteUserButton/DeleteUserButton";

const { TextArea } = Input;

class EditProfile extends React.Component {
  state = {
    loading: false,
    visible: false,
    about: ""
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleUpdate = e => {
    e.preventDefault();
    this.props.patchUser(this.state.about);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div className="editProfile">
        <Button type="primary" onClick={this.showModal}>
          Edit Profile
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>
          ]}
        >
          <span>
            <ImageUpload />
            <div style={{ textAlign: "center" }}>
              <br />{" "}
            </div>
          </span>
          <Input placeholder="Name" /> <br />
          <br />
          <TextArea rows={4} placeholder="Bio" /> <br />
          <br />
          <Input placeholder="Location" />{" "}
          <div className="row container">
            <DeleteUserButton username={this.props.username}></DeleteUserButton>
            <Button className="insideButton" type="primary" ghost>
              Update
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withAsyncAction("users", "patchUser")(EditProfile);
