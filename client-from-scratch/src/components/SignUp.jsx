import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class SignUp extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: ''
  };

  async handleSubmit(e) {
    e.preventDefault();
    try {
      if (this.state.password !== this.state.confirmPassword) {
        throw new Error('Password and confirm password do not match.');
      }
      const response = await axios.post('http://localhost:5000/api/users', this.state);
      if (response.data.code === 11000) {
        throw new Error('User already exists');
      } else {
        this.props.history.push('/signin');
      }
    } catch(err) {
      alert(err.message);
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div style={{marginTop: '25px'}}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Email </label>
            <input name="username" onChange={this.handleInput} />
          </div>
          <div>
            <label>Password </label>
            <input type="password" name="password" onChange={this.handleInput} />
          </div>
          <div>
            <label>Confirm password </label>
            <input type="password" name="confirmPassword" onChange={this.handleInput} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}