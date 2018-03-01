import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

class Users extends Component {
  componentDidMount() {
    console.log(this.props.token);
    this.props.getUsers(this.props.token);
  }

  render() {
    return (
      <ul>
        {this.props.users.map((user, i) => {
          return <li key={i}>{user.username}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, { getUsers })(Users);
