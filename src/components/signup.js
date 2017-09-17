// Complete the component in this file.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Panel } from 'react-bootstrap';
import { register } from '../actions';
import './style.css'

class SignUp extends Component {
  // This component needs a `handleFormSubmit` function that takes in 
  // username, password, comfirmPassword strings as input and 
  // invokes the `register` action 
  handleFormSubmit({ username, password }) {
    this.props.register(username, password, this.props.history);
  }

  renderAlert = () => {
    if (!this.props.error) return null;
    return (
      <h3>{this.props.error}</h3>
    );
  };

  render() {
    // Use reduxForm to build the sign up form
    // Check the other components to see how reduxForm is used
    // There needs fields for Username, Password, and Confirm Password
    const { handleSubmit } = this.props;

    return (
      <Panel className="signupPanel">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="signupField">
            <label>Username:</label>
            <Field name="username" component="input" type="text" />
          </fieldset>
          <fieldset className="signupField">
            <label>Password:</label>
            <Field name="password" component="input" type="password" />
          </fieldset>
          <button action="submit" className="signupButton btn btn-primary">Sign Up</button>
          {this.renderAlert()}
        </form>
      </Panel>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error
  };
};

// Make sure to correctly fill in this `connect` call
SignUp = connect(mapStateToProps, { register })(SignUp);

export default reduxForm({
  form: 'signup',
  fields: ['username', 'password'],
})(SignUp);
