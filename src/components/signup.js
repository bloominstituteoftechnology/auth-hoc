// Complete the component in this file.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { register } from '../actions';

//window history

class SignUp extends Component {
  // This component needs a `handleFormSubmit` function that takes in
  // username, password, comfirmPassword strings as input and
  // invokes the `register` action

  renderAlert = () => {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  };

  handleFormSubmit = (username, password, confirmPassword) => (
    const 
    this.props.register(username, password ,confirmPassword, this.props.history)};
  

  render() {
    const { handleSubmit } = this.props;
    // Use reduxForm to build the sign up form
    // Check the other components to see how reduxForm is used
    // There needs fields for Username, Password, and Confirm Password
    return <div>Sign Up</div>;
   <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
  <fieldset>
    <label>Username:</label>
    <Field name="username" component="input" type="text" />
  </fieldset>
  <fieldset>
    <label>Password:</label>
    <Field name="password" component="input" type="password" />
  </fieldset>
  <button action="submit">Sign Up</button>
  <fieldset>
    <label>Confirm Password</label>
    <Field name="confirmPassword" component="input" type="text" />
  </fieldset>
  <button action="submit">Sign Up</button>
  {this.renderAlert()}
</form>
  };

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
