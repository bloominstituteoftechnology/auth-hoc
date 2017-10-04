import axios from 'axios';

import { getAuthToken, setAuthToken } from './helper';

const ROOT = 'http://localhost:5000'
const AUTH = `${ROOT}/auth`;
const RESTRICTED = `${ROOT}/restricted`

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATEDS';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const GET_USERS = 'GET_USERS';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';

const authError = error => ({
  type: AUTHENTICATION_ERROR,
  payload: error,
});


export const register = (username, password, confirmPassword, history) => {
  return (dispatch) => {
    if (password !== confirmPassword) {
      dispatch(authError('Passwords do not match'));
      return;
    }
    const registerResponse = async () => {
      try {
        const response = await axios.post(`${AUTH}/register`, { username, password })
        const { data: { token } } = await response;
        if (token) {
          setAuthToken(token);
          dispatch({
            type: USER_REGISTERED,
            payload: token
          })
          history.push('/users')
          return
        }
        return dispatch(authError('No token recieved'))
      } catch (error) {
        return dispatch(authError(error.response.data.message));
      }
    }
    dispatch(registerResponse);
  };
};

export const login = (username, password, history) => {
  return (dispatch) => {
    const loginResponse = async () => {
      try {
        const response = await axios.post(`${AUTH}/login`, { username, password })
        const { data: { token } } = response;
        if (token) {
          setAuthToken(token);
          dispatch({
            type: USER_AUTHENTICATED,
            payload: token
          })
          history.push('/users');
          return;
        }
        return dispatch(authError('No token recieved'));
      } catch (error) {
        return dispatch(authError(error.response.data.error));
      }
    }
    dispatch(loginResponse);
  };
};

export const logout = (history) => {
  return (dispatch) => {
    const logoutResponse = async () => {
      try {
        await axios.post(`${AUTH}/logout`, { token: getAuthToken() });
        localStorage.removeItem('ClientAuthApp');
        history.push('/login')
        return dispatch({
          type: USER_UNAUTHENTICATED
        });
      } catch (error) {
        return dispatch(authError(error.message));
      }
    };
    dispatch(logoutResponse);
  };
};

export const getUsers = () => {
  return (dispatch) => {
    const getUsersResponse = async () => {
      try {
        const response = await axios.get(`${RESTRICTED}/users`, {
          headers: { 'Authorization': getAuthToken() }
        });
        return dispatch({
          type: GET_USERS,
          payload: response.data
        });
      } catch (error) {
        return dispatch(authError(error))
      }
    };
    dispatch(getUsersResponse);
  };
};
