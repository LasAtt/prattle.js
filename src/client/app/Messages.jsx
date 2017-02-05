import React from 'react';
import {
  ListGroup,
  ListGroupItem,

} from 'react-bootstrap';

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
        console.log(json);
        this.setState({messages: json});
      });
    });
  }

  render() {
    return (
      <ListGroup id="chat">
        {console.log(this.state.messages)}
        {
          this.state.messages.map((message) => {
            console.log(message);
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
