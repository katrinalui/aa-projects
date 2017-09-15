import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.item) {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.item.name}</h3>
        <ul>
          <li>Happiness: {this.props.item.happiness}</li>
          <li>Price: ${this.props.item.price}</li>
        </ul>
      </div>
    );
  }
}


export default ItemDetail;
