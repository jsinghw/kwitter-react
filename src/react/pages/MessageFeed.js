import React from "react";
import { Menu, MessageList, MessageCard } from "../components";
import { userIsAuthenticated } from "../HOCs";
import { Layout } from "antd";

const { Content, Sider } = Layout;

class MessageFeed extends React.Component {
  render() {
    return (
      <>
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
              <MessageList />
            </Content>
          </Layout>
          <Layout style={{ marginTop: 20 }}>
            <Content style={{ marginLeft: 50 }}>
              <MessageCard />
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
