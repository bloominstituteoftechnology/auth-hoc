import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from '../users';

export default ComposedComponent => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return (
        <div>
          {this.props.authenticated ? <Users /> : null}
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};
