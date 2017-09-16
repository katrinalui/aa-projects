import  { postUser, postSession, deleteSession } from './util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = (user) => dispatch => {
  return ( postSession(user)
  .then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))), errors => (receiveErrors(errors)))
  );
};

export const logout = () => dispatch => {
  return ( deleteSession()
  .then(currentUser => (
    dispatch(receiveCurrentUser(null))), errors => (receiveErrors(errors)))
  );
};


export const signup = (user) => dispatch => {
  return ( postUser(user)
  .then(currentUser => (
    dispatch(receiveCurrentUser(currentUser))), errors => (receiveErrors(errors)))
  );
};
