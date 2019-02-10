import React, {Component} from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: ''
    }
  }

  selectPrice = () => {
    let price = 0;
    switch (this.props.className) {
      case "red": price = this.state.price + 2;
                  break;
      case "blue": price = this.state.price + 3;
                  break;
      case "black": price = this.state.price + 4;
                  break;
      case "orange": price = this.state.price + 5;
                  break;
      case "red circle": price = this.state.price + 6;
                  break;
      case "blue circle": price = this.state.price + 7;
                  break;
      case "black circle": price = this.state.price + 8;
                  break;
      case "orange circle": price = this.state.price + 9;
                  break;
      default:
    }
    this.setState({price});
    this.props.getPrice(price);
  }

  componentDidMount() {
    this.selectPrice();
  }

  render () {
    return (
      <div
        className={"item " + this.props.className}
      >
        <span className="price">{"Price: " + this.state.price}</span>
      </div>
    )
  }
}

export default Item;
