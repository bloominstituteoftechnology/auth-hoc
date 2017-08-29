import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkIfAuthenticated } from '../../actions';

export default (ComposedComponent) => {
    class RequireAuthentication extends Component {
        componentWillMount() {

        }

        render() {

        }
    }

    const mapStateToProps = (state) => {
        return { 
            authenticated: state.auth.authenticated
        };
    };

    return connect(mapStateToProps, { checkIfAuthenticated })(RequireAuthentication);
};
