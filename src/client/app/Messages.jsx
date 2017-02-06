import React from 'react';

class Messages extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }


  componentDidMount() {
    fetch('/api/messages/1').then((result) => {
      result.json().then((json) => {
        this.setState({messages: json});
      });
    });
  }

  render() {
    return (
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
    );
  }
}

export default Messages;
