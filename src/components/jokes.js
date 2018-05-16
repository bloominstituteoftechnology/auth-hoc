import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';

class Jokes extends Component {
  componentDidMount() {
    this.props.getJokes(this.props.JWT);
  }

  render() {
    return (
      <ul>
        {this.props.jokes.map((joke, i) => {
          return (
            <li key={i}>
              <p>{joke.setup}</p>
              <p>{joke.punchline}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes,
    JWT: state.auth.JWT,
  };
};

export default connect(mapStateToProps, { getJokes })(Jokes);
