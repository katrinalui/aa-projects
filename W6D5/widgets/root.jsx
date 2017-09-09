import Clock from './frontend/clock';
import Weather from './frontend/weather';
import AutoComplete from './frontend/autocomplete';
import React from 'react';

const names = ['Chris', 'Evan', 'Katrina', 'Alison', 'Pedro', 'Adrian','Priya', 'Nick', 'Thomas', 'Porfirio'];

class Widgets extends React.Component {
  render() {
    return (
      <div className = "widget">
        <Clock />
        <Weather />
        <AutoComplete />
      </div>
    );
  }
}

export default Widgets;
