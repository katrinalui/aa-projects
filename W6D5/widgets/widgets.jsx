import React from 'react';
import ReactDOM from 'react-dom';
import Widgets from './root';
// import Clock from './frontend/clock';
// import Weather from './frontend/weather';



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Widgets />, root);
});
