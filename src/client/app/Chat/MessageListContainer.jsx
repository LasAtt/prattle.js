import { connect } from 'react-redux'
import MessageList from './MessageList'

const getMessages = (messages, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return messages
  }
}

const mapStateToProps = (state) => {
  return (
    messages: getMessages(state.messages, state.visibilityFilter)
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageSend: (id, username, text) => {
      dispatch(addMessage(id, username, text))
    }
  };
}

const MessageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList)
