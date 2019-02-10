import React, {Component} from 'react';
import ItemPlace from './ItemPlace';
import Board from './Board';
import Money from './Money';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childNumber: 0,
      quantity: 0,
      money: 'Money',
      moneyToRemove: 0,
      total: '',
      message: 'Insert Money'
    }
  }

  getItemNumber = (number) => {
    this.setState({childNumber: number})
  }

  getItemQuantity = (quantity) => {
    this.setState({quantity})
  }

  getMoney = (money) => {
    this.setState({money});
    if (money === 0 || money === 'Money'){
      this.setState({message: 'Insert Money'});
    } else if (money !== this.state.money && money > 0) {
      this.setState({message: ''});
    } else if (money === this.state.money && this.state.moneyToRemove > money) {
      this.setState({message: 'Not enough money! Insert more!'});
    }
  }

  getMoneyToRemove = (money) => {
    if (money <= this.state.money) {
      this.setState({moneyToRemove: money});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="machine">
          <div className="part products">
            <div className="upper glass">
              <div className="line">
                <ItemPlace checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoneyToRemove={this.getMoneyToRemove} getItemQuantity={this.getItemQuantity} className="red" number="21"/>
                <ItemPlace checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoneyToRemove={this.getMoneyToRemove} getItemQuantity={this.getItemQuantity} className="orange" number="22"/>
                <ItemPlace checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoneyToRemove={this.getMoneyToRemove} getItemQuantity={this.getItemQuantity} className="black" number="23"/>
              </div>
              <div className="line">
                <ItemPlace checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoneyToRemove={this.getMoneyToRemove} getItemQuantity={this.getItemQuantity} className="blue circle" number="24"/>
                <ItemPlace checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoneyToRemove={this.getMoneyToRemove} getItemQuantity={this.getItemQuantity} className="black circle" number="25"/>
                <ItemPlace checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoneyToRemove={this.getMoneyToRemove} getItemQuantity={this.getItemQuantity} className="orange circle" number="26"/>
              </div>
              <div className="line">
                <ItemPlace checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoneyToRemove={this.getMoneyToRemove} getItemQuantity={this.getItemQuantity} className="red" number="27"/>
                <ItemPlace checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoneyToRemove={this.getMoneyToRemove} getItemQuantity={this.getItemQuantity} className="blue" number="28"/>
                <ItemPlace checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoneyToRemove={this.getMoneyToRemove} getItemQuantity={this.getItemQuantity} className="orange" number="29"/>
              </div>
              <div className="line">
                <ItemPlace checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoneyToRemove={this.getMoneyToRemove} getItemQuantity={this.getItemQuantity} className="blue circle" number="30"/>
                <ItemPlace checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoneyToRemove={this.getMoneyToRemove} getItemQuantity={this.getItemQuantity} className="black circle" number="31"/>
                <ItemPlace checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoneyToRemove={this.getMoneyToRemove} getItemQuantity={this.getItemQuantity} className="red circle" number="32"/>
              </div>
            </div>
            <div className="upper numbers">
              <div className="messages">{this.state.message}</div>
              <Board getItemNumber={this.getItemNumber} amount={this.state.money} />
              <Money quantity={this.state.quantity} checkNumber={this.state.childNumber} checkMoney={this.state.money} getMoney={this.getMoney} moneyToRemove={this.state.moneyToRemove} />
            </div>
          </div>
          <div className="part bottom-part"></div>
        </div>

      </div>
    )
  }
}

export default App;
