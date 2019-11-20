import React from "react";
import { Card, Avatar, Icon } from "antd";
import "antd/dist/antd.css";
import "./MessageCard.css"

class MessageCard extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div>
                    <h3>Message with person</h3>
                    <Icon type="delete" />
                </div>
                <div>

                </div>
            </React.Fragment>
        )
    }
}

export default MessageCard