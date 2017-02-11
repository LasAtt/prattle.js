import React, {PropTypes} from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

import Message from './Message.jsx'

const MessageList = ({messages}) => {
  return (
    <div>
      <ListGroup id="chat">
        {
          messages.map((message) =>
            <Message
              key={message._id}
              {...message}
            />
          )
        }
      </ListGroup>
    </div>
  )
}


export default MessageList
