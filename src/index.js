import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignIn from './components/signin';
import Users from './components/users';
import SignOut from './components/signout';
import SignUp from './components/signup';
import RequireAuth from './components/HOC/RequireAuth';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import reducers from './reducers';
import './index.css';
import { USER_AUTHENTICATED } from './actions';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)
const token = window.localStorage.getItem('token');
if(token) {
  store.dispatch({ type: USER_AUTHENTICATED });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/users" component={RequireAuth(Users)} />
        <Route path="/signout" component={SignOut} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
