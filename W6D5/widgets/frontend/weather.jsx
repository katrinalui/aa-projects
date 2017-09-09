import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount();
    this.state = {
      city:"",
      temperature:""
    };

  }

  componentDidMount() {
    const that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const request = new XMLHttpRequest();
      request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=58d639f4a3fbf731bc75f70a9626d3c7`, true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          const resp = JSON.parse(request.responseText);
          const convertedTemp = Math.round((parseInt(resp.main.temp)*(9/5)-459.67));
          that.setState({city: resp.name, temperature: convertedTemp});
        }
      };

      request.onerror = function() {
        // There was a connection error of some sort
      };

      request.send();
      });
  }

  render() {
    return (

      <div className = "weather">
        <h1>Weather</h1>
        <p>Current City: {this.state.city}</p>
        <p>Current Temperature: {this.state.temperature} °F</p>
      </div>

    );
  }
}

export default Weather;
