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
                // return <SignIn />;
                // window.location = '/signin';
                this.props.history.push('/signin');
            };
        }

        render() {
            // Here, check to see if `this.props.authenticated` is true
            if (!this.props.authenticated) {
                // If it isn't, then we don't want this component to return anything
                return;
            }
            // Else, render the component that was passed to this higher-order component
            return <ComposedComponent />;
        }
    }

    const mapStateToProps = (state) => {
        return {
            authenticated: state.auth.authenticated
        };
    };

    return connect(mapStateToProps)(RequireAuthentication);
};
