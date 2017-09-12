import React from 'react';
import uniqueId from './util';

class TodoForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    };
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  setTitle(event) {
    this.setState({title: event.currentTarget.value});
  }

  setBody(event) {
    this.setState({body: event.currentTarget.value});
  }

  createTodo (event) {
    event.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({title: "", body: "", id: uniqueId()});
  }

  render () {
    return (
      <form>
        <input onChange={this.setTitle} value={this.state.title} placeholder="Title" />
        <input onChange={this.setBody} value={this.state.body} placeholder="Body" />

        <button onClick={this.createTodo}>Add todo</button>
      </form>
    );
  }
}


export default TodoForm;
