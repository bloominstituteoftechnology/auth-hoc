import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Users from './components/Users';
import RequireAuth from './components/RequireAuth';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signout" component={SignOut} />
          <Route path="/users" component={RequireAuth(Users)} />
        </div>
      </Router>
    );
  }
}

export default App;
