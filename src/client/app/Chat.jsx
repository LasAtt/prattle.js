import React from 'react';

import io from 'socket.io-client';
let socket = io();

import {ListGroup, ListGroupItem} from 'react-bootstrap';

import MessageForm from './MessageForm.jsx';
import UsernameForm from './UsernameForm.jsx';

class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      messages: []
    };

    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.handleUsernameForm = this.handleUsernameForm.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  componentDidMount() {
    fetch('/api/messages/1').then((result) => {
      result.json().then((json) => {
        console.log(json);
        this.setState({messages: json});
      });
    });

    socket.on('init', this._initialize)
    socket.on('message:new', this.handleNewMessage);
    //socket.on('user:new', handleNewUser);
  }

  _initialize(data) {
    var {users, name} = data;
    this.setState({users, user: name});
  }

  handleNewMessage(message) {
    this.setState({messages: this.state.messages.concat([message])});
  }

  handleSendMessage(text) {
    var message = {
      username: this.state.username,
      text: text.message
    };
    socket.emit('message:new', message);
  }

  handleUsernameForm(username) {
    this.setState(username);
    socket.emit('username:set', username)
  }

  render() {
    return <div>
      <UsernameForm
        handleUsernameForm={this.handleUsernameForm}
      />

    <div className="pre-scrollable" id="chat" style={{height: 400}}>
        <ListGroup id="chat">
          {
            this.state.messages.map((message) => {
              return (
                <ListGroupItem key={message._id}>
                  <b>{message.username}</b> | {message.text}
                </ListGroupItem>
              )
            })
          }
        </ListGroup>
      </div>

      <MessageForm
        handleSendMessage={this.handleSendMessage}
      />
    </div>
  }
}

export default Chat;
