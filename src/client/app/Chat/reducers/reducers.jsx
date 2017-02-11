import { combineReducers } from 'redux'
import { ADD_MESSAGE, RECEIVE_MESSAGES, VisibilityFilters } from '../actions/index.jsx'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    default:
      return state
  }
}

function messages(state = [], action) {
  switch(action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: [
          ...state,
          {
            id: action.id,
            username: action.username,
            text: action.text
          }
        ]
      })
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, {
        messages: action.messages
      })
    default:
      return state
  }
}


const messageApp = combineReducers({
  visibilityFilter,
  messages
})

export default messageApp
