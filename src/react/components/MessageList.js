import React from "react"
import UserMessages from "./Messages/UserMessages";

class MessageList extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h1>Messages</h1>
                <UserMessages />
            </React.Fragment>
        )
    }
}

export default MessageList