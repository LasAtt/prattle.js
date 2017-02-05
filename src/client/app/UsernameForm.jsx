import React from 'react';
import {Form, InputGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';


class UsernameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
  }

  submitUsername(e)  {
    e.preventDefault();
    this.props.handleUsernameForm({ username: this.state.text });
  }

  usernameChangeHandler(e) {
    this.state.text = e.target.value;
  }

  render() {
    return (
      <Form onSubmit={this.submitUsername.bind(this)}>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Enter username"
            onChange={this.usernameChangeHandler.bind(this)}
          />
          <InputGroup.Button>
            <Button type="submit">Send</Button>
          </InputGroup.Button>
        </InputGroup>
      </Form>
    )
  }
}

export default UsernameForm;
