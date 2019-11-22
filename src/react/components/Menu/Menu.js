import React from "react"
import { NavLink } from "react-router-dom"
import "./Menu.css"
import { withAsyncAction } from "../../HOCs"
import { Icon } from "antd"

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault()
    this.props.logout()
  }

  render() {
    return (
      <div id="menu">
        <h1>Kwitter</h1>

        {this.props.isAuthenticated && (
          <React.Fragment>
            <nav id="menu-links">
              <NavLink to="/kweetfeed/:username" className="sideBarLink">
                <Icon type="home" />
              </NavLink>
              <NavLink to="/profile/:username" className="sideBarLink">
                <Icon type="user" />
              </NavLink>
              <NavLink to="/messages" className="sideBarLink">
                <Icon type="message" />
              </NavLink>
            </nav>
            <div id="sideBarLinkLogOutContainer">
              <NavLink
                to="/"
                className="sideBarLink"
                id="sideBarLinkLogOut"
                onClick={this.handleLogout}
              >
                <Icon type="poweroff" />
              </NavLink>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default withAsyncAction("auth", "logout")(Menu)