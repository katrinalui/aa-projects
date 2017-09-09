import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      inputVal: ""
    };
  }

  render(){
    return(
      <div>
        <input type = "text"></input>
        <ul>

        </ul>
      </div>
    );
  }
}

export default AutoComplete;
