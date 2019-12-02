import React from "react"
import { NavLink } from "react-router-dom"
import "./Menu.css"
import { withAsyncAction } from "../../HOCs"
import { Icon, Menu } from "antd"
import {connect} from "react-redux"

class SideMenu extends React.Component {
  handleLogout = event => {
    event.preventDefault()
    this.props.logout()
  }

  render() {
    return (
      <React.Fragment>
        <svg
          width="96px"
          height="101px"
          viewBox="0 0 96 101"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="logo"
        >
          <title>Fill 207 Copy 2</title>
          <desc>Created with Sketch.</desc>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Artboard-4"
              transform="translate(-585.000000, -131.000000)"
              fill="#00356B"
            >
              <g id="Group-213" transform="translate(72.000000, 131.000000)">
                <path
                  d="M572.053,61.714 L583.109,45.97 L583.109,77.478 L572.053,61.714 Z M607.598,40.257 C607.908,40.257 608.159,40.005 608.159,39.697 L608.159,22.089 C608.159,21.779 607.908,21.529 607.598,21.529 L580.029,21.529 C579.847,21.529 579.676,21.618 579.571,21.767 L561.791,47.084 L556.925,40.145 L583.845,1.764 C584.085,1.422 584.115,0.975 583.922,0.604 C583.729,0.233 583.345,3.55271368e-14 582.927,3.55271368e-14 L564.059,3.55271368e-14 C563.693,3.55271368e-14 563.351,0.179 563.141,0.478 L538.887,35.059 L538.887,1.121 C538.887,0.502 538.385,3.55271368e-14 537.766,3.55271368e-14 L514.121,3.55271368e-14 C513.502,3.55271368e-14 513,0.502 513,1.121 L513,19.165 C513,19.784 513.502,20.286 514.121,20.286 L518.602,20.286 L518.602,60.006 L514.121,60.006 C513.502,60.006 513,60.507 513,61.125 L513,79.17 C513,79.789 513.502,80.29 514.121,80.29 L537.766,80.29 C538.385,80.29 538.887,79.789 538.887,79.17 L538.887,45.202 L551.034,62.402 L524.759,99.817 C524.639,99.988 524.623,100.212 524.72,100.396 C524.816,100.582 525.008,100.699 525.217,100.699 L544.384,100.699 C544.566,100.699 544.737,100.609 544.842,100.46 L561.33,76.982 L563.332,79.817 C563.541,80.114 563.883,80.29 564.247,80.29 L582.927,80.29 C582.99,80.29 583.05,80.284 583.109,80.274 L583.109,100.139 C583.109,100.448 583.361,100.699 583.67,100.699 L607.598,100.699 C607.908,100.699 608.159,100.448 608.159,100.139 L608.159,82.531 C608.159,82.222 607.908,81.971 607.598,81.971 L602.274,81.971 L602.274,40.257 L607.598,40.257 Z"
                  id="Fill-207-Copy-2"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        {this.props.isAuthenticated && (
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <NavLink
                to={"/Kweetfeed/" + this.props.username}
                className="nav-text sideBarLink"
              >
                <Icon type="home" /> Kweetfeed
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to={"/profile/" + this.props.username} className="nav-text sideBarLink">
                <Icon type="user" /> Profile
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/messages" className="nav-text sideBarLink">
                <Icon type="message" /> Messages
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink
                to="/"
                className="nav-text sideBarLink"
                onClick={this.handleLogout}
              >
                <Icon type="poweroff" />
                Logout
              </NavLink>
            </Menu.Item>
          </Menu>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  if (state.auth && state.auth.login && state.auth.login.result && state.auth.login.result.username){
  return {
    username:state.auth.login.result.username
    }
  }
}
export default connect(mapStateToProps)(withAsyncAction("auth", "logout")(SideMenu))
