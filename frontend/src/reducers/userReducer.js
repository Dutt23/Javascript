import { 
  USER_LOGIN_REQUEST, 
  USER_LOGIN_REQUEST_SUCCESS, 
  USER_LOGIN_REQUEST_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_REGISTER_REQUEST,
  USER_REGISTER_REQUEST_SUCCESS,
  USER_REGISTER_REQUEST_FAILURE,
  USER_DETAILS_REQUEST,
  USER_DETAILS_REQUEST_SUCCESS,
  USER_DETAILS_REQUEST_FAILURE,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_REQUEST_SUCCESS,
  USER_UPDATE_PROFILE_REQUEST_FAILURE,
  USER_UPDATE_PROFILE_SUCCESS_FALSE
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, products: [] }
    case USER_LOGIN_REQUEST_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_REQUEST_FAILURE:
      return { loading: false, error: action.payload }
    case USER_LOGOUT_REQUEST:
      return { }
    default: return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, products: [] }
    case USER_REGISTER_REQUEST_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTER_REQUEST_FAILURE:
      return { loading: false, error: action.payload }
    default: return state
  }
}

export const userDetailsReducer = (state = { user : { }}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true}
    case USER_DETAILS_REQUEST_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_DETAILS_REQUEST_FAILURE:
      return { loading: false, error: action.payload }
    default: return state
  }
}


export const updateUserProfileReducer = (state = { }, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true}
    case USER_UPDATE_PROFILE_REQUEST_SUCCESS:
      return { loading: false, success: true}
    case USER_UPDATE_PROFILE_REQUEST_FAILURE:
      return { loading: false, error: action.payload }
    case USER_UPDATE_PROFILE_SUCCESS_FALSE:
        return { success: false }
    default: return state
  }
}