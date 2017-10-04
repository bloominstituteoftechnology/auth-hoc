import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default (ComposedComponent) => {
    class RequireAuthentication extends Component {
        componentWillMount() {
            // Here, we want to check to see if `this.props.authenticated` is true
            // If it isn't, then redirect the user back to the /signin page
            if (!this.props.token) {
                this.props.history.push('/login');
            }
        }

        render() {
            // Here, check to see if `this.props.authenticated` is true
            // If it isn't, then we don't want this component to return anything
            // Else, render the component that was passed to this higher-order component
            return this.props.token
                ? <ComposedComponent/>
                :<div>
                    <h1>Hmmm... you look like you need to sign in first ;)</h1>
                    <Link to="/login">Login</Link>
                </div>;
        }
    }

    const mapStateToProps = (state) => {
        return { 
            token: state.auth.token
        };
    };

    return connect(mapStateToProps)(RequireAuthentication);
};
