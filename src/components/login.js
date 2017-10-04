import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { login } from '../actions';
import { connect } from 'react-redux';

class Login extends Component {
  handleFormSubmit({email, password}) {
    this.props.login(email, password, this.props.history);
  }

  renderAlert() {
    if (!this.props.error) return null;
    return (
      <h3>{this.props.error}</h3>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset>
          <label>Username:</label>
          <Field name="email" component="input" type="text" />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field name="password" component="input" type="password" />
        </fieldset>
        <button action="submit">Login</button>
        {this.renderAlert()}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated,
  };
};

Login = connect(mapStateToProps, { login })(Login);

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
})(Login);
