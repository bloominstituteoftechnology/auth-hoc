// Complete the component in this file.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { register } from '../actions';

class SignUp extends Component {
  // This component needs a `handleFormSubmit` function that takes in
  // username, password, comfirmPassword strings as input and
  // invokes the `register` action
  handleFormSubmit({ username, password, confirmPassword }) {
    this.props.register(username, password, confirmPassword, this.props.history);
  }
  renderAlert = () => {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  };

  render() {
    // Use reduxForm to build the sign up form
    // Check the other components to see how reduxForm is used
    // There needs fields for Username, Password, and Confirm Password
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <label>Username</label>
          <div>
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <label>Confirm Password</label>
          <div>
            <Field
              name="confirmPassword"
              component="input"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div>
        <button action="submit">Sign Up</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
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
SignUp = connect(mapStateToProps, { register })(SignUp);

export default reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'confirmPassword']
})(SignUp);
