export const ADD_MESSAGE = 'ADD_MESSAGE'
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL'
}

export function addMessage(id, username, text) {
  return {
    type: ADD_MESSAGE,
    id,
    username,
    text
  }
}

export function receiveMessages(messages) {
  return {
    type: RECEIVE_MESSAGES,
    messages: messages
  }
}
