import React from "react"
import KweetCard from "./KweetCard/KweetCard";
import Kweets from "./Kweets/Kweets"
class KweetList extends React.Component {
    render() {
        return(
            <React.Fragment>

                <KweetCard />
            <Kweets />
            </React.Fragment>
        )
    }
}

export default KweetList