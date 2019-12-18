
const initialState = {
    username: null,
    gender: null,
    age: null
  }

const UPDATE_USER = 'UPDATE_USER'
const SET_GENDER = 'SET_GENDER'
const SET_AGE = 'SET_AGE'

export default function UserReducer(state, action) {
    switch (action.type) {
      case UPDATE_USER:
        return {
          username: action.username,
          gender: null,
          age: null
        }
      case SET_GENDER:
        return {
          username: state.username,
          gender: action.gender,
          age: null
        }
      case SET_AGE:
        return {
          username: state.username,
          gender: state.gender,
          age: action.age
        }
      default:
        return initialState
    }
  }