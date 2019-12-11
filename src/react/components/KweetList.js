import React from "react";
import KweetCard from "./KweetCard/KweetCard";
import Kweets from "./Kweets/Kweets";

class KweetList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ marginLeft: "22px" }}>Kweet Feed</h1>
        <KweetCard />

        <Kweets />
      </React.Fragment>
    );
  }
}

export default KweetList;
