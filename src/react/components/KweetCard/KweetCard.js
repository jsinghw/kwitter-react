import React from "react";
import { Card, Input, Button, Avatar } from "antd";
import "antd/dist/antd.css";
import "./KweetCard.css";
import { withAsyncAction } from "../../HOCs";
import { Spinner } from "..";
import { domain } from "../../../redux/actionCreators/constants";

const { TextArea } = Input;

class KweetCard extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleClick = event => {
    event.preventDefault();
    this.props.PostMessages(this.state);
    this.setState({ text: "" });
  };

  render() {
    const { loading, error } = this.props;
    const username = JSON.parse(localStorage.login).result.username;
    return (
      <React.Fragment>
        <div style={{ marginLeft: 20 }} className="container1">
          <form id="kweetcard" onSubmit={this.handleClick}>
            <Card className="card">
              <div className="row">
                <div>
                  <Avatar
                    className="profile"
                    shape="circle"
                    size={64}
                    icon="user"
                    src={`${domain}/users/${username}/picture`}
                  />
                  <span style={{ textAlign: "center" }}>
                    <br />{" "}
                  </span>
                </div>
                <TextArea
                  rows={4}
                  placeholder="What's happening?"
                  name="text"
                  type="text"
                  onChange={this.handleChange}
                  autoFocus
                  value={this.state.text}
                />{" "}
              </div>
              <p>Characters Remaining: {255 - this.state.text.length}</p>
              <div className="button">
                <Button type="primary" htmlType="submit">
                  Kweet
                </Button>
              </div>
            </Card>
          </form>
        </div>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("messages", "PostMessages")(KweetCard);
