import React from "react";
import { Avatar, Button, Card, Typography } from "antd";
import "../ListOfUsers/ListOfUsers.css";
import { withAsyncAction } from "../../HOCs";
import { Spinner } from "..";

const { Paragraph } = Typography;

class ListOfUsers extends React.Component {
  componentDidMount() {
    this.props.getlistofusers();
  }
  render() {
    if (this.props.result === null) {
      return <div><Spinner name="circle" color="blue" /></div>
    }
    const getUser = this.props.result.users;
    return getUser.map(user => {
      return (
        <div className="container1">
          <Card className="card">
            <div className="row ">
              <span>
                <Avatar
                  className="profile"
                  shape="circle"
                  size={64}
                  icon="user"
                />
                <span style={{ textAlign: "center" }}>
                  <br />{" "}
                </span>
              </span>
              <div className="row">
                <h3 style={{ fontWeight: "bold" }}>{user.displayName}</h3>
              </div>
              <div className="p1">
                <p>@{user.username}</p>
                <Paragraph ellipsis={{ rows: 2, expandable: false }}>
                  {user.about
                    ? getUser.about
                    : "This user has not set up an about"}
                </Paragraph>
              </div>
            </div>
            <div className="button">
              <Button type="primary">Follow</Button>
            </div>
          </Card>
        </div>
      );
    });
  }
}
//this.props
//mapstatetoprops
//sucess
//start
//fail
//

export default withAsyncAction("listofusers", "getlistofusers")(ListOfUsers);
