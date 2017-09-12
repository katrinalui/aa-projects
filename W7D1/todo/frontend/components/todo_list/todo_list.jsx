import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo, removeTodo}) => (
  <div>
    <ul>
      { todos.map((todo, idx) => <TodoListItem todo = {todo} key = {idx} removeTodo={ removeTodo } receiveTodo={ receiveTodo }/>) }
    </ul>

    <TodoForm receiveTodo={ receiveTodo }/>
  </div>
);

export default TodoList;
