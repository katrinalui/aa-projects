import React from 'react';


const TodoListItem = ({todo, removeTodo, receiveTodo}) => (
  

  <li>
    {todo.title}
    <button onClick={() => removeTodo(todo.id)}>Remove Todo</button>
    <button onClick={() => receiveTodo(todo)}>Done</button>
    </li>
);



export default TodoListItem;
