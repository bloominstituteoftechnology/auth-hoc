import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function RequireAuth(ChildComponent) {
  class RequireAuthentication extends Component {
    componentWillMount() {
      // Here, we want to check to see if `this.props.authenticated` is true
      // If it isn't, then redirect the user back to the /signin page
      if (!localStorage.getItem('authorization')) {
        this.props.history.push('/signin');
      }
    }

    render() {
      const foundToken = localStorage.getItem('authorization');
      if (foundToken) {
        return (
          <ChildComponent />
        );
      }
      return null;
      // Here, check to see if `this.props.authenticated` is true
      // If it isn't, then we don't want this component to return anything
      // Else, render the component that was passed to this higher-order component
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated,
      token: state.auth.token
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};
