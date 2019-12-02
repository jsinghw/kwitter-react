import React from "react"
import UserMessages from "../Messages/UserMessages";
import "./MessageList.css"

class MessageList extends React.Component {
    render() {
        return(
            <span>
                <h1>Messages</h1>
                <UserMessages />
            </span>
        )
    }
}

export default MessageList