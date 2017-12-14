import axios from 'axios';
// Fixes an issue with axios and express-session where sessions
// would not persist between routes
axios.defaults.withCredentials = true;
const ROOT_URL = 'http://localhost:3000';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const GET_USERS = 'GET_USERS';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';

export const authError = error => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error
  };
};
export const register = (username, password, confirmPassword, history) => {
  return dispatch => {
    console.log(`register username: ${username} password: ${password} confirmPassword: ${confirmPassword} ROOT_URL: ${ROOT_URL}`);
    if (password !== confirmPassword) {
      dispatch(authError('Passwords do not match'));
      return;
    }
    axios
      .post(`${ROOT_URL}/users`, {
        username,
        password
      })
      .then((res) => {
        console.log(`register token : ${res.data.token}`)
        localStorage.setItem('token', res.data.token);
        dispatch({
          type: USER_REGISTERED
        });
        history.push('/signin');
      })
      .catch((err) => {
        dispatch(authError(`Failed to register user err: ${err}`));
      });
  };
};

export const login = (username, password, history) => {
  return dispatch => {
    axios({
        method: 'post',
        url: `${ROOT_URL}/login`,
        data: {
          username,
          password
        }
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch({
          type: USER_AUTHENTICATED
        });
        history.push('/users');
      })
      .catch((err) => {
        dispatch(authError(`Incorrect username/password combo err: ${err}`));
      });
  };
};

export const logout = () => {
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: token
  };
  return dispatch => {
    axios({
        method: 'post',
        url: `${ROOT_URL}/logout`,
        withCredentials: true,
        headers
      })
      .then((res) => {
        console.log(`logout res.data.success`, res.data.success);
        localStorage.removeItem('token');
        dispatch({
          type: USER_UNAUTHENTICATED
        });
      })
      .catch((err) => {
        if (token)
          dispatch(authError(`Failed to log you out err: ${err}`));
      });
  };
};

export const getUsers = () => {
  const headers = {
    Authorization: `${localStorage.getItem('token')}`
  };
  return dispatch => {
    axios
      .get(`${ROOT_URL}/users`, {
        headers
      })
      .then(response => {
        dispatch({
          type: GET_USERS,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(authError('Failed to fetch users'));
      });
  };
};