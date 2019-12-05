import React from "react";
import { Menu, UserProfile, ProfileMessages } from "../components";
import { userIsAuthenticated } from "../HOCs";
import { Layout } from "antd";


const { Content, Sider } = Layout;

class Profile extends React.Component {
  render() {
    console.log(this.props.match.params.username);
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <Menu isAuthenticated={this.props.isAuthenticated} />
        </Sider>
        <Layout style={{ marginLeft: 200, marginTop: 20 }}>
          <Content style={{ marginLeft: 50 }}>
            <h2>Profile</h2>

                <UserProfile username={this.props.match.params.username} />
  

            <br />
            <ProfileMessages username={this.props.match.params.username} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default   userIsAuthenticated(Profile);
