import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
    this.intervalId = 0;
    this.componentDidMount();
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  render(){
    return (
      <div className = "clock">
        <h1 className= "clockelement">Clock</h1>
        <div className= "clockelement">
          <h3>Time: </h3>
          <p>{this.state.time.getHours()} : {this.state.time.getMinutes()} : {this.state.time.getSeconds()}</p>
        </div>
        <br/>
        <div className= "clockelement">
          <h3>Date: </h3>
          <p>{this.parseDay.bind(this)()}, {this.parseMonth.bind(this)()} {this.state.time.getDate()}</p>
        </div>
      </div>
    );
  }

  parseDay(){
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[ this.state.time.getDay() ];
  }

  parseMonth(){
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return months[ this.state.time.getMonth() ];
  }
  tick(){
    this.setState({time: new Date()});
  }


}

export default Clock;
