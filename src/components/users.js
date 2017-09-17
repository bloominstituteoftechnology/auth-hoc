import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import { Panel } from 'react-bootstrap';
import './style.css';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  
  render() {
    return (
      // <ul>
      //   {this.props.users.map((user, i) => {
      //     return <li key={i}>{user.username}</li>;
      //   })}
      // </ul>
      <div style={{'text-align': "center", 'font-size': "23px"}}>You are now logged in {this.props.users.username}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { getUsers })(Users);
