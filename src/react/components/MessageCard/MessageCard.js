import React from "react";
import { Card, Avatar, Icon } from "antd";
import "antd/dist/antd.css";
import "./MessageCard.css"
import TextArea from "antd/lib/input/TextArea";

class MessageCard extends React.Component {
    render() {
        return(
            <Card id="individualMessage" size="default" style={{width:"500px"}} title="Message with testing-account">
                <Icon type="delete" />
                <div className="messageFrom">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <span>Lorem ipsum dolor amet bicycle rights YOLO craft beer, hashtag plaid pug asymmetrical activated charcoal. Jianbing vape venmo, subway tile la croix small batch typewriter. </span>
                    <p>Nov 21, 2019, 11:26 AM</p>
                </div>
                <div className="messageTo">
                    <span>Enamel pin snackwave godard cred vexillologist, single-origin coffee brooklyn hell of fixie letterpress etsy stumptown asymmetrical keffiyeh cray.</span>
                    <p>Nov 21, 2019, 12:10 PM</p>
                </div>
                <footer>
                    <TextArea rows={1} style={{width:"300px"}}placeholder="Send new message" />
                    <Icon style={{padding:"0.5em"}} type="mail" />
                </footer>
                
            </Card>
        )
    }
}

export default MessageCard