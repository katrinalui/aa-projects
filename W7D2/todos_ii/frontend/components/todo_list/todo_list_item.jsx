import React from 'react';


class TodoListItem extends React.Component {
  constructor(props) {
    super (props);
    // this.state = {
    //   id: this.props.todo.id,
    //   done: this.props.todo.done,
    //   title: this.props.todo.title,
    //   body: this.props.todo.body
    // };
    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo (e) {
    e.preventDefault();
    const updatedTodo = Object.assign({}, this.props.todo, { done: !this.props.todo.done });
    // this.setState({ done: !this.state.done }, () => this.props.updateTodo({todo: this.state}) );

    this.props.updateTodo({todo: updatedTodo});

    // if (this.state.done) {
    //   this.setState({done: false});
    //   console.log("component-before", this.state);
    // } else {
    //   this.setState({done: true}, () => this.props.updateTodo({todo: this.state}) );
    //
    // }
    // console.log("component-after", this.state);
  }

  render () {
    const todo = this.props.todo;

    return (
    <li>
      {todo.title}
      <button onClick={() => this.props.removeTodo(todo.id)}>Remove Todo</button>
      <button onClick={this.updateTodo}>{todo.done ? 'Undo' : 'Done'}</button>
    </li>
  );
  }

}





export default TodoListItem;
