// import actions from "../actions/actions"
import { CREATE_LIST, SET_STATUS, CREATE_USER, SET_LOGIN } from "../actions/actionTypes"




const init = {
  Todos: [],
  Counter: 0,
  User: [],
  isLogin: false


}

const reducer = (state = init, actions) => {
  if (actions.type === CREATE_LIST) {
    return {
      ...state,
      Counter: state.Counter + 1,
      Todos: [...state.Todos, { id: state.Counter, active: true, todos: actions.payload }]
    }
  }

  else if (actions.type === SET_STATUS) {
    if (state.Todos[actions.payload].active === true) {
      state.Todos[actions.payload].active = false
      return {
        ...state,
        Todos: [...state.Todos]
      }
    }
    if (state.Todos[actions.payload].active === false) {
      state.Todos[actions.payload].active = true
      return {
        ...state,
        Todos: [...state.Todos]
      }
    }
  }
  else if (actions.type === CREATE_USER) {
    return {
      ...state,
      User: [{ name: actions.payload.username, password: actions.payload.password }]
    }
  }
  else if (actions.type === SET_LOGIN) {
    return {
      ...state,
      isLogin: actions.payload
    }
  }
  // else if (action.type === "UPDATE_QUESTIONS") {
  //   return {
  //     ...state,
  //     Questions: [...state.Questions, ...action.payload]
  //   }
  // }

  return state


}

export default reducer