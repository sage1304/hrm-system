import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './login.action';

const initialState = {
  isAuthenticated: false,
  user: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

export default loginReducer;
