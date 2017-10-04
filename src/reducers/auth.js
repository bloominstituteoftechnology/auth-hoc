import {
  USER_REGISTERED,
  USER_AUTHENTICATED,
  USER_UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHECK_IF_AUTHENTICATED,
} from '../actions';

export default (auth = {}, action) => {
  switch (action.type) {
    case USER_REGISTERED: 
      return { ...auth, token: `Bearer ${action.payload}`, error: null };
    case USER_AUTHENTICATED:
      return { ...auth, token: `Bearer ${action.payload}`, error: null  };
    case USER_UNAUTHENTICATED:
      return { ...auth, token: false, error: null  };
    case AUTHENTICATION_ERROR:
      return { ...auth, error: action.payload };
    case CHECK_IF_AUTHENTICATED:
      return { ...auth , error: null };
    default:
      return auth;
  }
};
