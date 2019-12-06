import React from "react"
import { Link } from "react-router-dom"
import { withAsyncAction, connect } from "../../HOCs"
import { Button } from "antd"
import "../EditProfile/EditProfile.css"

class DeleteUserButton extends Button {
  handleDeleteUser = event => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account?"
    )
    if (confirmed) {
      this.props.deleteUser()
      return <Link to='/' />
    }
  }

  render() {
    return (
      this.props.username === this.props.loggedInUsername && (
        <Button
          onClick={this.handleDeleteUser}
          className="insideButton"
          type="danger"
          ghost
        >
          Delete Your Profile
        </Button>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  }
}
export default connect(
  mapStateToProps,
  null
)(withAsyncAction("users", "deleteUser")(DeleteUserButton))
