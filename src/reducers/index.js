import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';
import UsersReducer from './users';
import UserReducer from './user';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  users: UsersReducer,
  user: UserReducer,
});

export default rootReducer;
