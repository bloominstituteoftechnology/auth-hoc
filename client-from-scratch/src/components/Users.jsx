import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Users extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://localhost:5000/api/users', {
        headers: {
          Authorization: token
      }});
      console.log(response);
      this.setState({users: response.data});
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, i) => {
            return (
              <li key={`user${i}`}>{user.username}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}