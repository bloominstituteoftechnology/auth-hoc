import axios from 'axios';
// Fixes an issue with axios and express-session where sessions
// would not persist between routes
axios.defaults.withCredentials = true;
const ROOT_URL = 'http://localhost:5000/api';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const GET_USERS = 'GET_USERS';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';

export const authError = error => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error,
  };
};

export const register = (username, password, confirmPassword, history) => {
  return dispatch => {
    if (password !== confirmPassword) {
      dispatch(authError('Passwords do not match'));
      return;
    }
    axios
      .post(`${ROOT_URL}/users`, { username, password })
      .then(() => {
        dispatch({
          type: USER_REGISTERED,
        });
        history.push('/signin');
      })
      .catch(() => {
        dispatch(authError('Failed to register user'));
      });
  };
};

export const login = (username, password, history) => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/login`, { username, password })
      .then(response => {
        console.log(response);
        dispatch({
          type: USER_AUTHENTICATED,
          payload: response.data.token,
        });
        history.push('/users');
      })
      .catch(() => {
        dispatch(authError('Incorrect email/password combo'));
      });
  };
};

export const logout = () => {
  return { type: USER_UNAUTHENTICATED };
  // return dispatch => {
  // axios
  //   .post(`${ROOT_URL}/logout`)
  //   .then(() => {
  //     dispatch({
  //       type: USER_UNAUTHENTICATED,
  //     });
  //   })
  //   .catch(() => {
  //     dispatch(authError('Failed to log you out'));
  //   });
  // };
};

export const getUsers = token => {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/users`, { headers: { authorization: token } })
      .then(response => {
        dispatch({
          type: GET_USERS,
          payload: response.data,
        });
      })
      .catch(() => {
        dispatch(authError('Failed to fetch users'));
      });
  };
};

// export const validateToken = token => {
//   console.log('validate token before api');
//   return dispatch => {
//     axios
//       .get(`${ROOT_URL}/users`, { headers: { authorization: token } })
//       .then(response => {
//         console('after validate token');
//         console.log(response);
//         dispatch({
//           type: GET_USERS,
//           payload: response.data,
//         });
//       })
//       .catch(() => {
//         dispatch(authError('Failed to validate token'));
//       });
//   };
// };
