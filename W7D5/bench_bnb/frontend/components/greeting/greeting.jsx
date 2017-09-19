import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
  <div className="logged-in-header">
    <h2 className="header-name">Welcome, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</div>
);

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Log In</Link>
    &nbsp;
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const Greeting = ({currentUser, logout}) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
