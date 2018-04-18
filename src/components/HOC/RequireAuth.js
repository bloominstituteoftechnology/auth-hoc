import React, { Component } from "react";
import { connect } from "react-redux";

export default ComposedComponent => {
    class RequireAuthentication extends Component {
        componentWillMount() {
            // Here, we want to check to see if `this.props.authenticated` is true
            // If it isn't, then redirect the user back to the /signin page
            // console.log("=====", this.props);
            const { history } = this.props;

            if (this.props.authenticated) return;

            // location.replace("http://localhost:3000/signin");

            history.pushState(null, "/signin");
        }

        render() {
            return (
                <div>
                    {this.props.authenticated ? <ComposedComponent /> : null}
                </div>
            );
            // Here, check to see if `this.props.authenticated` is true
            // If it isn't, then we don't want this component to return anything
            // Else, render the component that was passed to this higher-order component
        }
    }

    const mapStateToProps = state => {
        return {
            authenticated: state.auth.authenticated,
        };
    };

    return connect(mapStateToProps)(RequireAuthentication);
};
