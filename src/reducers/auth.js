// action types imported from actions/index.js
import {
  USER_AUTHENTICATED,
  USER_UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHECK_IF_AUTHENTICATED,
} from '../actions';
//                state  action
export default (auth = {}, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED: // login action
      return { ...auth, authenticated: true };
    case USER_UNAUTHENTICATED: // logout action
      return { ...auth, authenticated: false };
    case AUTHENTICATION_ERROR: // authentication throw error
      return { ...auth, error: action.payload };
    case CHECK_IF_AUTHENTICATED: // authentication check 
      return { ...auth };
    default:
      return auth;
  }
};
