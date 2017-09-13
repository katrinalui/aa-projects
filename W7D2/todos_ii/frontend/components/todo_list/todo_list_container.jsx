import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, removeTodo, fetchTodos, createTodo, updateTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';


const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
