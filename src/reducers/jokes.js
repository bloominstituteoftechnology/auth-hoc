import { GET_JOKES } from '../actions';

export default (jokes = [], action) => {
  switch (action.type) {
    case GET_JOKES:
      return action.payload;
    default:
      return jokes;
  }
};
