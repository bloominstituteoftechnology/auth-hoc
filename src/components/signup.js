// Complete the component in this file.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { register } from '../actions';

class SignUp extends Component {
  // This component needs a `handleFormSubmit` function that takes in
  // username, password, comfirmPassword strings as input and
  // invokes the `register` action

  renderAlert = () => {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  };

  handleFormSubmit = ({ username, password, confirmPassword }) => {
    const history = this.props.history;
    this.props.register(username, password, confirmPassword, history);
  };

  render() {
    // Use reduxForm to build the sign up form
    // Check the other components to see how reduxForm is used
    // There needs fields for Username, Password, and Confirm Password
    return (
      <form onSubmit={ this.props.handleSubmit(this.handleFormSubmit) }>
        <Field type='text' component="input" name='username' placeholder='Name' required />
        <Field type='password' component="input" name='password' placeholder='Password' required />
        <Field type='password' component="input" name='confirmPassword' placeholder='Confirm Password' required />
        <button action='submit'>SIGN UP</button>
        { this.renderAlert() }
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
