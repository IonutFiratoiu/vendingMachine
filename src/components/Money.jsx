import React, {Component} from 'react';

class Money extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 'Money'
    }
  }

  moneyClick = (event, value) => {
    event.preventDefault();
    if (this.state.amount === 'Money') {
      const newValue = value;
      this.setState({amount: newValue});
      this.props.getMoney(newValue);
    } else {
      const newValue = this.state.amount + value;
      this.setState({amount: newValue});
      this.props.getMoney(newValue);
    }
  }

  componentDidUpdate (prevState, prevProps) {
    if (prevState.moneyToRemove !== this.props.moneyToRemove) {
      const value = this.state.amount - this.props.moneyToRemove;
      this.setState({amount: value});
      this.props.getMoney(value);
    } else if (this.props.quantity < prevState.quantity && this.props.moneyToRemove > 0){
      const value = this.state.amount - this.props.moneyToRemove;
      this.setState({amount: value});
      this.props.getMoney(value);
    }
  }

  render () {
    return (
      <div
        className="money"
      >
        <form>
          <button className="btn btn-danger moneyButton" value="0.5" onClick={(event) => this.moneyClick(event, 0.5)}>0.50 RON</button>
          <button className="btn btn-danger moneyButton" value="1" onClick={(event) => this.moneyClick(event, 1)}>1 RON</button>
          <button className="btn btn-danger moneyButton" value="5" onClick={(event) => this.moneyClick(event, 5)}>5 RON</button>
          <div className="displayAmount">{this.state.amount}</div>
        </form>
      </div>
    )
  }
}

export default Money;
