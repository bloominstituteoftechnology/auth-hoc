import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';

class Logout extends Component {
  componentWillMount() {
    this.props.logout(this.props.history);
  }

  render() {
    return (
      <div>You have signed out</div>
    );
  }
}

export default connect(null, { logout })(Logout);
