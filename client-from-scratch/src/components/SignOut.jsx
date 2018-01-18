import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SignOut extends Component {

  componentWillMount() {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  render() {
    return <div></div>;
  }
}