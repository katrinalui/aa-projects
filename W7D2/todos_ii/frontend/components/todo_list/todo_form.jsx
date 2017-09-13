import React from 'react';
import uniqueId from './util';

class TodoForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setTitle(event) {
    this.setState({title: event.currentTarget.value});
  }

  setBody(event) {
    this.setState({body: event.currentTarget.value});
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.createTodo({todo: this.state}).then(
      () => this.setState({ title: "", body: "" })
    );
  }

  render () {
    let errors = this.props.errors.map((error, i) => (
      <li key={i}>{error}</li>
    ));

    return (
      <form>
        <input onChange={this.setTitle} value={this.state.title} placeholder="Title" />
        <input onChange={this.setBody} value={this.state.body} placeholder="Body" />

        <button onClick={this.handleSubmit}>Add todo</button>

        <br/>
        <ul>
          {errors}
        </ul>
      </form>
    );
  }
}


export default TodoForm;
