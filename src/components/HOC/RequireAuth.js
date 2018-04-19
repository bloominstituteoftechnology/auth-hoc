import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      // Here, we want to check to see if `this.props.authenticated` is true
      // If it isn't, then redirect the user back to the /signin page
      if (!this.props.authenticated) {
        this.props.history.push('/signin');
      }
      // if not signed in then pushed back to the sign in page or else it's logged in
      // and you don't need to do anythin
      // if logged in then you don't need to check
    }

    render() {
      return <div />;
      // Here, check to see if `this.props.authenticated` is true
      // If it isn't, then we don't want this component to return anything
      // Else, render the component that was passed to this higher-order component
    }
  }

  const mapStateToProps = (state) => {
    return {
      authenticated: state.auth.authenticated,
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};
