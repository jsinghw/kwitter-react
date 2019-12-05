import React from "react";
import { Avatar, Button, Card, Typography } from "antd";
import "../ListOfUsers/ListOfUsers.css";
import { withAsyncAction } from "../../HOCs";
import { Spinner ,Link } from "..";


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
            <span className="row">
              <div>
              <Link to={`/profile/${user.username}`} style={{marginLeft:0,}}>
                <Avatar
                  className="profile"
                  shape="circle"
                  size={64}
                  icon="user"
                />
                </Link>
                <div style={{ textAlign: "center" }}>
                  <br />{" "}
                </div>
              </div>
              <div className="row">
                <h3 style={{ fontWeight: "bold" }}><Link to={`/profile/${user.username}`} style={{marginLeft:0,color:"black" }}>{user.displayName}</Link></h3>
              </div>
              <div className="p1">
                <p><Link to={`/profile/${user.username}`} style={{marginLeft:0, color: "black"}}>@{user.username}</Link></p>
                <Paragraph ellipsis={{ rows: 2, expandable: false }}>
                  {user.about
                    ? user.about
                    : "This user has not set up an about"}
                </Paragraph>
              </div>
            </span>
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

export default withAsyncAction("users", "getlistofusers")(ListOfUsers);
