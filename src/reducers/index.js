import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { reducer as FormReducer } from 'redux-form';
import JokesReducer from './jokes';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  jokes: JokesReducer,
});

export default rootReducer;
