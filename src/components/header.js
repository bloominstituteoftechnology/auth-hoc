import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  getLinks() {
    if (this.props.token) {
      return (
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      );
    }
    return [
      <li key={1}>
        <Link to="/login">Login</Link>
      </li>,
      <li key={2}>
        <Link to="/register">Register</Link>
      </li>,
    ];
  }

  render() {
    return (
      <div>
        <Link to="/">Client Auth</Link>
        <ul>
          {this.getLinks()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(Header);
