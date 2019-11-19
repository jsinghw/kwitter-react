import React from "react";
import { Menu,KweetList } from "../components";
import { userIsAuthenticated } from "../HOCs";

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