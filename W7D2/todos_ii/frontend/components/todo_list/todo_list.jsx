import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.todos.map((todo, idx) => <TodoListItem todo = {todo} key = {idx} removeTodo={ this.props.removeTodo } updateTodo={ this.props.updateTodo }/>) }
        </ul>

        <TodoForm createTodo={ this.props.createTodo } errors={ this.props.errors }/>
      </div>
    );
  }
}

export default TodoList;
