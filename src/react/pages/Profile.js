import React from "react"
import { Menu, UserProfile, ListOfUsers } from "../components"
import { userIsAuthenticated } from "../HOCs"
import { Layout } from "antd"

const { Content, Sider } = Layout

class Profile extends React.Component {
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
          <Menu isAuthenticated={this.props.isAuthenticated} />
        </Sider>
        <Layout style={{ marginLeft: 200, marginTop: 20 }}>
          <Content style={{ marginLeft: 50 }}>
            <h2>Profile</h2>
            <UserProfile />
            <br/>
            <ListOfUsers />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default userIsAuthenticated(Profile)
