import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css'

class Header extends Component {
  getLinks() {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      );
    }
    return [
      <li key={1} className="nav-item">
        <Link className="nav-link" to="/signin">Sign In</Link>
      </li>,
      <li key={2} className="nav-item">
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
    ];
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Client Auth</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            {this.getLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(Header);
