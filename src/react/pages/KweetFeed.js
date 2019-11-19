import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";
import KweetList from "../components/KweetList";

class KweetFeed extends React.Component {
    render() {
        return (
            <>
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <KweetList />
            </>
        )
    }
}

export default userIsAuthenticated(KweetFeed)