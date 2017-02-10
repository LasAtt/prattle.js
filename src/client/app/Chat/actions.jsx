export const ADD_MESSAGE = 'ADD_MESSAGE'

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
