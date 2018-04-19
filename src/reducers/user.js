import { USER_REGISTERED, USER_AUTHENTICATED } from '../actions';

export default (user = {}, action) => {
  switch (action.type) {
    case USER_REGISTERED:
      // TBD enable self login when signup, but for now, manual login
      return user;
    // case USER_AUTHENTICATED:
    //   // do something
    //   return user;
    default:
      return user;
  }
};
