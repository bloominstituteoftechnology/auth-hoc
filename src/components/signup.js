// Complete the component in this file.
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { register } from "../actions";

class SignUp extends Component {
  // This component needs a `handleFormSubmit` function that takes in
  // username, password, comfirmPassword strings as input and
  // invokes the `register` action

  renderAlert = () => {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  };

  handleFormSubmit = ({ username, password, confirmPassword }) => {
    if (!username || !password || !confirmPassword) {
      this.renderAlert();
    }
    this.props.register({ username, password, confirmPassword });
  };

  render() {
    // Use reduxForm to build the sign up form
    // Check the other components to see how reduxForm is used
    // There needs fields for Username, Password, and Confirm Password
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset>
          <label htmlFor="username"> Username: </label>
          <Field name="username" component="input" />
        </fieldset>
        <fieldset>
          <label htmlFor="password"> Password: </label>
          <Field name="password" component="input" type="password" />
        </fieldset>
        <fieldset>
          <label htmlFor="confirmPassword"> confirmPassword: </label>
          <Field name="confirmPassword" component="input" type="password" />
        </fieldset>
        <button>submits</button>
        {this.renderAlert()}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error
  };
};

// Make sure to correctly fill in this `connect` call
SignUp = connect(null, { register })(SignUp);

export default reduxForm({
  form: "signup",
  fields: ["username", "password", "confirmPassword"]
})(SignUp);
