import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { signIn } from '../actions';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import './style.css'

class SignIn extends Component {
  handleFormSubmit({username, password}) {
    this.props.signIn(username, password, this.props.history);
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
          <button action="submit" className="btn btn-primary signupButton">Sign In</button>
          {this.renderAlert()}
        </form>
      </Panel>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated,
  };
};

SignIn = connect(mapStateToProps, { signIn })(SignIn);

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password'],
})(SignIn);
