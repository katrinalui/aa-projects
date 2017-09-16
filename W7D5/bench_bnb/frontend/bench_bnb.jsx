import React from 'react';
import ReactDOM from 'react-dom';
import  { postUser, postSession, deleteSession } from './util/session_api_util';

window.postUser = postUser;
window.postSession = postSession;
window.deleteSession = deleteSession;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Hellooooo</h1>, root);
});
