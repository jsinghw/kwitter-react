import React from "react";
import { connect } from "react-redux";
import ImageUpload from "./ImageUpload";
import { Modal, Button, Input } from "antd";
import "antd/dist/antd.css";
import "./EditProfile.css";
import { withAsyncAction } from "../../HOCs/index";
import DeleteUserButton from "../DeleteUserButton/DeleteUserButton";

const { TextArea } = Input;

class EditProfile extends React.Component {
  state = {
    loading: false,
    visible: false,
    displayName: this.props.displayName,
    about: this.props.about
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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = e => {
    e.preventDefault();
    this.props.updateUser(
      this.state.displayName,
      this.state.about,
      this.props.username
    );
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
          title="Update your profile"
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
          <Input
            name="displayName"
            type="text"
            onChange={this.handleChange}
            placeholder="Update Display Name"
          />{" "}
          <br />
          <br />
          <TextArea
            name="about"
            type="text"
            onChange={this.handleChange}
            rows={4}
            placeholder="Bio"
          />{" "}
          <br />
          <br />
          <div className="row container">
            <DeleteUserButton username={this.props.username}></DeleteUserButton>
            <Button
              className="insideButton"
              type="primary"
              ghost
              onClick={this.handleUpdate}
            >
              Update
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayName: state.users.getProfile.result.displayName,
    about: state.users.getProfile.result.about
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("users", "updateUser")(EditProfile)
);
