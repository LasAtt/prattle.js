import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const Message = ({username, text}) => {
    return (
      <ListGroupItem>
        <b>{username}</b> | {text}
      </ListGroupItem>
    )
}

export default Message
