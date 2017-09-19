import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillUnmount() {
  //
  // }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({ user });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <h2>{this.props.formType === 'signup' ? "Sign Up" : "Log In"}</h2>

        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>
          <input type="text"
            onChange={this.update("username")}
            placeholder="Username"
            value={this.state.username}
          />
          <br />
          <input type="password"
            onChange={this.update("password")}
            placeholder="Password"
            value={this.state.password}
            />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default SessionForm;
// need withRouter?
