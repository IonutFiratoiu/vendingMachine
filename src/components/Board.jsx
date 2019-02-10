import React, {Component} from 'react';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productNumber: ''
    }
  }

  clickNumber = (e) => {
    e.preventDefault();
    this.setState({productNumber: this.state.productNumber + e.currentTarget.value});
  }

  removeNumber = (e) => {
    e.preventDefault();
    this.setState({productNumber: this.state.productNumber.slice(0, -1)});
  }

  checkItemNumber = (e) => {
    e.preventDefault();
    this.props.getItemNumber(this.state.productNumber);
  }

  checkDisabled = () => {
    if (this.props.amount === "Money" || this.props.amount === 0) {
      return true;
    } else {
      return false;
    }
  }

  render () {
    return (
      <div
        className="board"
      >
        <div className="displayNumber">{this.state.productNumber}</div>
        <div className="buttons">
          <form>
            <button className="button btn btn-primary" value="1" onClick={(event) => {this.clickNumber(event)}}>1</button>
            <button className="button btn btn-primary" value="2" onClick={(event) => {this.clickNumber(event)}}>2</button>
            <button className="button btn btn-primary" value="3" onClick={(event) => {this.clickNumber(event)}}>3</button>
            <button className="button btn btn-primary" value="4" onClick={(event) => {this.clickNumber(event)}}>4</button>
            <button className="button btn btn-primary" value="5" onClick={(event) => {this.clickNumber(event)}}>5</button>
            <button className="button btn btn-primary" value="6" onClick={(event) => {this.clickNumber(event)}}>6</button>
            <button className="button btn btn-primary" value="7" onClick={(event) => {this.clickNumber(event)}}>7</button>
            <button className="button btn btn-primary" value="8" onClick={(event) => {this.clickNumber(event)}}>8</button>
            <button className="button btn btn-primary" value="9" onClick={(event) => {this.clickNumber(event)}}>9</button>
            <button className="button btn btn-primary" value="X" onClick={(event) => {this.removeNumber(event)}}>X</button>
            <button className="button btn btn-primary" value="0" onClick={(event) => {this.clickNumber(event)}}>0</button>
            <button className="button btn btn-primary" value="enter" onClick={(event) => {this.checkItemNumber(event)}} disabled={this.checkDisabled()}>&#8629;</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Board;
