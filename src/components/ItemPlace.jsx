import React, {Component} from 'react';
import Item from './Item';

class ItemPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 10,
      price: ''
    }
  }

  getPrice = (price) => {
    this.setState({price})
  }

  removeItem = (event) => {
    if (this.state.quantity > 0) {
      this.setState({quantity: this.state.quantity - 1})
    }
  }

  removeMoney = (value) => {
    this.props.getMoneyToRemove(value);
  }

  componentDidUpdate (prevState, prevProps) {
    if (this.props.checkNumber === this.props.number && prevState !== this.props) {
      if (parseFloat(this.props.checkMoney) >= parseFloat(this.state.price) && parseInt(this.props.checkNumber) !== parseInt(prevState.checkNumber)) {
        this.removeItem();
        this.removeMoney(parseFloat(this.state.price));
        this.props.getItemQuantity(this.state.quantity);
      } else if (parseFloat(this.props.checkMoney) >= parseFloat(this.state.price) && prevProps.quantity === this.state.quantity && this.props.checkMoney === prevState.checkMoney){
        this.removeItem();
        this.removeMoney(parseFloat(this.state.price));
        this.props.getItemQuantity(this.state.quantity);
      }
    }
  }

  render () {
    return (
      <div
        className="item-place"
      >
        <Item
          className={this.props.className}
          quantity={this.state.quantity}
          removeItem={this.props.removeItem}
          getPrice={this.getPrice}
        />
        <span
          className="quantity">{"Items: " + this.state.quantity}
        </span>
        <span
          className="number">{this.props.number}
        </span>
      </div>
    )
  }
}

export default ItemPlace;
