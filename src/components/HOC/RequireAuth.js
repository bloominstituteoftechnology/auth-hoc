import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router';

// want to wrap the user component
// to make sure the user is authorized or not

export default ComposedComponent => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      // Here, we want to check to see if `this.props.authenticated` is true
      // If it isn't, then redirect the user back to the /signin page
      // this.props.authenticated ? ComposedComponent : <Redirect to="/signin" />
      // if (!this.props.authenticated) <Redirect to="/signin" />;
      if (!this.props.authenticated) this.props.history.push("/sigin");
    }

    render() {
      // return <div />;
      // Here, check to see if `this.props.authenticated` is true
      // If it isn't, then we don't want this component to return anything
      // Else, render the component that was passed to this higher-order component
      // if (this.props.authenticated) {
      //   { ComposedComponent }
      // }
      return (
        <div>
        { this.props.authenticated ? <ComposedComponent /> : null }
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};
