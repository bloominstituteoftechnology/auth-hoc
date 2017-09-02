// REDUCER: TAKES IN ACTIONS + UPDATES PART OF APPLICATION STATE

import { GET_USERS } from '../actions'; // GET_USERS ACTION imported from actions/index.js

export default (users = [], action) => {
  switch (action.type) {
    case GET_USERS: // Action
      return action.payload;
    default:
      return users;
  }
};
