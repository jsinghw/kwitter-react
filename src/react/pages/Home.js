import React from "react";
import { LoginForm, Menu, SignupForm } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import { Layout } from "antd";

const { Content, Sider } = Layout;

class Home extends React.Component {
  render() {
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
          <Menu />
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content>
            <h2>Your favorite microblogging platform</h2>
            <LoginForm />
            <SignupForm />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default userIsNotAuthenticated(Home);
