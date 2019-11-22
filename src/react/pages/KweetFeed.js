import React from "react"
import { Menu, KweetList } from "../components"
import { userIsAuthenticated } from "../HOCs"
import { Layout } from "antd"

const { Content, Sider } = Layout

class KweetFeed extends React.Component {
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
        <Layout style={{ marginLeft: 200 }}>
        <Content>
          <KweetList className="pages" />
        </Content>
        </Layout>
      </Layout>
    )
  }
}

export default userIsAuthenticated(KweetFeed)
