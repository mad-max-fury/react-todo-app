import { CREATE_LIST, SET_STATUS, CREATE_USER, SET_LOGIN } from "./actionTypes"

export const CreateListItem = (payload) => {
  return {
    type: CREATE_LIST,
    payload
  }

}
export const setStatus = (payload) => {
  return {
    type: SET_STATUS,
    payload
  }

}
export const handleCreateUser = (username, password) => {
  return {
    type: CREATE_USER,
    payload: {
      username: username,
      password: password
    }
  }

}
export const handleSetLogin = (payload) => {
  return {
    type: SET_LOGIN,
    payload
  }

}
// export const handleQuestionUpdate = (payload) => {
//   return {
//     type: UPDATE_QUESTIONS,
//     payload
//   }

// }