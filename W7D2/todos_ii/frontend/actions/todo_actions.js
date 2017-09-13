import APIUtil from '../util/todo_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo: todo
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id: id
  };
};

export const fetchTodos = () => dispatch => (
  APIUtil.getTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => dispatch => (
  APIUtil.createTodo(todo)
    .then(
    newTodo => dispatch(receiveTodo(newTodo)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateTodo = (todo) => dispatch => (
  APIUtil.updateTodo(todo)
    .then(
      updatedTodo => dispatch(receiveTodo(updatedTodo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);
