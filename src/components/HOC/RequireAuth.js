import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ComposedComponent) => {
    class RequireAuthentication extends Component {
        constructor() {
            super();
            this.auth = null;
        }
        componentWillMount() {
            if (localStorage.getItem('token')) this.auth = localStorage.getItem('token');
        }

        render() {
            return this.auth !== null ? <ComposedComponent /> : <Redirect to="signin" />;
            // Here, check to see if `this.props.authenticated` is true
            // If it isn't, then we don't want this component to return anything
            // Else, render the component that was passed to this higher-order component
        }
    }

    const mapStateToProps = (state) => {
        return { 
            authenticated: state.auth.authenticated
        };
    };

    return connect(mapStateToProps)(RequireAuthentication);
};
