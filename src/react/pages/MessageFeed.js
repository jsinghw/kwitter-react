import React from "react";
import Menu from "../components/Menu";
import MessageList from "../components/MessageList";

class MessageFeed extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <MessageList />
            </>
        )
    }
}

export default MessageFeed