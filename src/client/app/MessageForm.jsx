import React from 'react';
import ReactDOM from 'react-dom';
import {Form, InputGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.submitMessage = this.submitMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  submitMessage(e)  {
    e.preventDefault();
    this.props.handleSendMessage({ message: this.state.text });

    this.setState({text: ''});
    ReactDOM.findDOMNode(this.textArea).focus();
  }

  updateMessage(e) {
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <Form onSubmit={this.submitMessage}>
        <InputGroup>
            <FormControl
              componentClass="textarea"
              placeholder="Enter message"
              onChange={this.updateMessage}
              ref={(input) => this.textArea = input}
              value={this.state.text}
            />
          <InputGroup.Button>
            <Button type="submit" id="messageButton">Send</Button>
          </InputGroup.Button>
        </InputGroup>
      </Form>
    )
  }
}

export default MessageForm;
