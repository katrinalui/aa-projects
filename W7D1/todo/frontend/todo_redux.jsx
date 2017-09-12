import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Root store={configureStore()} />, document.getElementById('root'));
});

// window.store = configureStore();
//
// window.receiveTodos = receiveTodos;
// window.receiveTodo = receiveTodo;
