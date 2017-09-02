import AuthReducer from './auth';
import UsersReducer from './users';
import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer, // this FormReducer froms from redux-form. it doesn't have a file.
  users: UsersReducer,
});

export default rootReducer;
