import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux'; // added compose
import ReduxThunk from 'redux-thunk';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import logger from 'redux-logger'; // added logger

import App from './App';
import SignIn from './components/signin';
import Users from './components/users';
import SignOut from './components/signout';
import SignUp from './components/signup';
import RequireAuth from './components/HOC/RequireAuth';

import reducers from './reducers';
import './index.css';

//const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

// rewrote the redux createStoreWithMiddleware to composeEnhancers then createStoreWithMiddleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(logger, ReduxThunk));
const createStoreWithMiddleware = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
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
