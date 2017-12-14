// Complete the component in this file.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';
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

  /*
  passwordDup = (value, allValues) => {
    console.log(`value: ${value} allValues.password: ${allValues.password}`)
    if (value !== allValues.password) this.props.error = "passwords don't match";
    return value !== allValues.password
      ? "Passwords Don't Match"
      : undefined;
  };
  */

  render() {
    // Use reduxForm to build the sign up form
    // Check the other components to see how reduxForm is used
    // There needs fields for Username, Password, and Confirm Password
    const { handleSubmit } = this.props;
    console.log('in render');
    return (
      <Form name='signup' onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
        <div>
          <label htmlFor="username">User Name</label>
          <Field name="username" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Password Confirm</label>
          <Field name="confirmPassword" component="input" type="password"  />
        </div>
        <button type="submit">Submit</button>
        {this.renderAlert()}
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error
  };
};

// Make sure to correctly fill in this `connect` call
SignUp = connect(mapStateToProps, {register})(SignUp);

export default reduxForm({
  form: 'signup',
  fields: ['username', 'password', 'confirmPassword']
})(SignUp);
