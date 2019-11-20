import React from "react";
import { Menu , MessageList , MessageCard }from "../components";
import { userIsAuthenticated } from "../HOCs";

class MessageFeed extends React.Component {
    render() {
        return (
            <>
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <MessageList />
                <MessageCard />
            </>
        )
    }
}

export default userIsAuthenticated(MessageFeed);