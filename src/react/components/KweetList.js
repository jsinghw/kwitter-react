import React from "react"
import KweetCard from "./KweetCard";

class KweetList extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h1>Messages</h1>
                <KweetCard />
            </React.Fragment>
        )
    }
}

export default KweetList