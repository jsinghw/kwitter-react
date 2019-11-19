import React from "react";
import { Menu } from "../components";
import KweetList from "../components/KweetList";

class MessageFeed extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <KweetList />
            </>
        )
    }
}

export default MessageFeed