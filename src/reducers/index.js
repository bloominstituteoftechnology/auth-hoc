import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';
import UsersReducer from './users';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer, // where does this form reducer come from ? is it a file in project?
  users: UsersReducer,
});

export default rootReducer;
