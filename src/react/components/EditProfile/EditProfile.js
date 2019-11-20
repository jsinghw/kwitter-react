import React from "react";
import ImageUpload from "./ImageUpload";
import { Card, Button, Input } from "antd";
import "antd/dist/antd.css";
import "./EditProfile.css";

const { TextArea } = Input;

class EditProfile extends React.Component {
  render() {
    return (
      <Card>
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
        <span className="row container">
          <div className="danger">
            <Button type="danger" ghost>
              Delete Profile
            </Button>
          </div>
          <div className="button">
            <Button type="primary" ghost>
              Update
            </Button>
          </div>
        </span>
      </Card>
    );
  }
}

export default EditProfile;