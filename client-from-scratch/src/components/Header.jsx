import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {

  renderSignInLink() {
    return (<Link to="/signin">Sign In</Link>)
  }

  renderSignOutLink() {
    return (<Link to="/signout">Sign Out</Link>)
  }
  renderSignUpLink() {
    return (<Link to="/signup">Sign Up</Link>)
  }

  render() {
    const token = localStorage.getItem('token');
    if (!token) {
      return (
        <div>
          {this.renderSignInLink()} | 
          {this.renderSignOutLink()} | 
          {this.renderSignUpLink()}
        </div>
      );
    } else {
      return (
      <div>
        {this.renderSignOutLink()} |
        {this.renderSignUpLink()}
      </div>
      );
    }
  }
}