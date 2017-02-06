import React from 'react';

import cookie from 'react-cookie';

import io from 'socket.io-client';
let socket = io();

import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ScrollArea from 'react-scrollbar';

import MessageForm from './MessageForm.jsx';
import UsernameForm from './UsernameForm.jsx';

class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      messages: [],
    };

    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.handleUsernameForm = this.handleUsernameForm.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  componentDidMount() {
    fetch('/api/messages/1').then((result) => {
      result.json().then((json) => {
        this.setState({messages: json});
        this.state.scrollarea.scrollBottom();
      });
    });

    socket.on('message:new', this.handleNewMessage);
    //socket.on('user:new', handleNewUser);

    this.state.username = cookie.load('username');
    if (this.state.username) {
      this.userform.close();
      console.log(this.userform.state.showModal);
    }
  }

  handleNewMessage(message) {
    this.setState({messages: this.state.messages.concat([message])}, () => {
      this.state.scrollarea.scrollBottom();
    });
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
    cookie.save('username', username.username, {path: '/'})
    socket.emit('username:set', username)
  }

  render() {
    return (
      <div>
        <UsernameForm
          handleUsernameForm={this.handleUsernameForm}
          ref={(ref) => this.userform = ref}
        />

        <ScrollArea
          speed={0.8}
          className="chat"
          ref={(scrollarea) => {this.state.scrollarea = scrollarea}}
        >
          <ListGroup className="messages">
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
        </ScrollArea>
        <MessageForm
          handleSendMessage={this.handleSendMessage}
        />
      </div>
    );
  }
}

export default Chat;
