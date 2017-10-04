import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/login';
import Users from './components/users';
import Logout from './components/logout';
import Register from './components/register';
import RequireAuth from './components/HOC/RequireAuth';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={RequireAuth(Users)} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
