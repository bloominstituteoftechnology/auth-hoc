import React, { Component } from 'react';
import { connect } from 'react-redux';
// import SignIn from '../signin';
// import Users from '../users';


export default (ComposedComponent) => {
    class RequireAuthentication extends Component {
        componentWillMount() {
            // Here, we want to check to see if `this.props.authenticated` is true
            // If it isn't, then redirect the user back to the /signin page
            if (!this.props.authenticated) {
                return window.location = '/signin';
            };
        }

        render() {
            // Here, check to see if `this.props.authenticated` is true
            if (!this.props.authenticated) {
                // If it isn't, then we don't want this component to return anything
                return null;
            }
            // Else, render the component that was passed to this higher-order component
            // return <Users />;
            return <ComposedComponent {...this.props} />;
        }
    }

    const mapStateToProps = (state) => {
        return { 
            authenticated: state.auth.authenticated
        };
    };

    return connect(mapStateToProps)(RequireAuthentication);
};
