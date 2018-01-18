import React, { Component } from 'react';
import axios from 'axios';

export default function(ComposedComponent) {
  class RequireAuth extends Component {

    async isAuthenticated() {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/users', {
          headers: {
            Authorization: token
        }});
        if (response.status === 200) return true;
      } catch(err) {
        return false;
      }
    }

    render() {
      if (!this.isAuthenticated()) {
        return <div />
      }
      return <ComposedComponent {...this.props} />
    }
  }

  return RequireAuth;
}