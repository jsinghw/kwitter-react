import { Comment, Icon, Tooltip, Avatar,Card } from 'antd';
import moment from 'moment';
import React from "react"
import "../KweetCard/KweetCard.css"
const messages= [
  {
    "id": 995,
    "text": "This is another kweet",
    "username": "test",
    "createdAt": "2019-11-21T17:04:56.183Z",
    "likes": []
  },
  {
    "id": 994,
    "text": "This is a lunch kweet.",
    "username": "test",
    "createdAt": "2019-11-21T17:04:11.921Z",
    "likes": []
  },
  {
    "id": 993,
    "text": "test",
    "username": "test",
    "createdAt": "2019-11-21T16:49:41.258Z",
    "likes": []
  },
  {
    "id": 992,
    "text": "heyyyyyy",
    "username": "test",
    "createdAt": "2019-11-21T15:03:34.112Z",
    "likes": []
  },
  {
    "id": 991,
    "text": "Heyy\n",
    "username": "test",
    "createdAt": "2019-11-21T15:03:18.633Z",
    "likes": []
  },
  {
    "id": 990,
    "text": "Yayyyyy.",
    "username": "test",
    "createdAt": "2019-11-21T14:48:44.104Z",
    "likes": []
  },
  {
    "id": 989,
    "text": "hey!!!!!!!!!",
    "username": "test",
    "createdAt": "2019-11-21T14:48:20.417Z",
    "likes": []
  },
  {
    "id": 988,
    "text": "Hey!",
    "username": "test",
    "createdAt": "2019-11-21T14:08:37.411Z",
    "likes": []
  },
  {
    "id": 987,
    "text": "Hello Morning",
    "username": "test",
    "createdAt": "2019-11-21T14:00:54.302Z",
    "likes": []
  },
  {
    "id": 986,
    "text": "It might be!",
    "username": "test",
    "createdAt": "2019-11-21T12:33:43.636Z",
    "likes": []
  }]

class Kweets extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  render() {
    return messages.map(message => {
    const { likes, dislikes, action } = this.state;

    const actions = [
      <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
      <span key="comment-basic-reply-to">Reply to</span>,
    ];
    
    return (
      <div className="container1">
      <Card className="card">
        <div className="row">
      <Comment
        actions={actions}
        author={message.username}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
         message.text ? message.text : <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
      </div>
      </Card>
      </div>
    );
  }
    )}}

export default Kweets;