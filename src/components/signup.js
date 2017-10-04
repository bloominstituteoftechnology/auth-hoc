// Complete the component in this file.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { register } from '../actions';

class SignUp extends Component {

handleFormSubmit = ({username, password, confirmPassword}) => {
  this.props.register(username, password, confirmPassword, this.props.history);

}

  renderAlert = () => {
    if (!this.props.error) return null;
    return (
      <h3>{this.props.error}</h3>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={ handleSubmit(this.handleFormSubmit) }>
        <fieldset>
          <label>Username</label>
          <field name="username" component="input" type="test" />
        </fieldset>
        <fieldset>
          <label>password</label>
          <field name="password" component="input" type="password" />
        </fieldset>
        <fieldset>
          <label>Confirm Password</label>
          <field name="confirmPassword" component="input" type="password" />
        </fieldset>
        <button onClick="submit">Sign In</button>
        { this.renderAlert() }
      </Form>
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
  fields: ['username', 'password', 'confirmPassword'],
})(SignUp);
