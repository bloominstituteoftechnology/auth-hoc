import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SignIn extends Component {
  state = {
    username: '',
    password: '',
  };

  async handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', this.state);
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      this.props.history.push('/users');
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
          <button>Submit</button>
        </form>
      </div>
    )
  }
}