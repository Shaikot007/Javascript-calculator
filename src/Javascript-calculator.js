import React from 'react';
import './Javascript-calculator.scss';
import { Button } from 'reactstrap';
 
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "0",
    };
  }
  // For input numbers
  handleChange = (event) => {
    if ((/([^.0-9]0)$/).test(this.state.inputValue) === true) {
      this.setState( {
        inputValue: this.state.inputValue.slice(0, -1) + event.target.value
      });
    }
    else if (this.state.inputValue.includes(".") === true) {
      this.setState({
        inputValue: (this.state.inputValue + event.target.value).replace(/^0+/, '0')
      });
    }
    else {
      this.setState({
        inputValue: (this.state.inputValue + event.target.value).replace(/^0+/, '')
      });
    }
  }
  // For input zero
  handleZero = (event) => {
    if ((/([^.0-9]0)$/).test(this.state.inputValue) === true) {
      this.setState( {
        inputValue: (this.state.inputValue + event.target.value).slice(0, -1)
      });
    }
    else {
      this.setState({
        inputValue: (this.state.inputValue + event.target.value).replace(/^0+/, '0')
      });
    }
  }
  // For input decimal
  handleDecimal = (event) => {
    const value = event.target.value;
    if (this.state.inputValue.match(/(-?\d?\.?\d*)$/)[0].includes(".") === false) {
      this.setState((state) => {
        return {
          inputValue: state.inputValue + value
        }
      });
    }
    if (this.state.inputValue.match(/(-?\d?\.?\d*)$/)[0].includes(".") === false && (/[*+-/]$/).test(this.state.inputValue) === true && value === ".") {
      this.setState((state) => {
        return {
          inputValue: state.inputValue.slice(0, -1) + "0" + value
        }
      });
    }
  }
  // For input operators
  handleOperator = (event) => {
    const value = event.target.value;
    if ((/^[+*/]/).test(this.state.inputValue) === true) {
      this.setState((state) => {
        return {
          inputValue: state.inputValue.slice(1) + value
        }
      });
    }
    else if ((/[\.]$/).test(this.state.inputValue) === true) {
      this.setState((state) => {
        return {
          inputValue: state.inputValue + "0" + value 
        }
      });
    }
    else if ((/[*+-/]$/).test(this.state.inputValue) === false) {
      this.setState({
        inputValue: this.state.inputValue + value
      });
    }
    else if ((/[*+/]$/).test(this.state.inputValue) === true && value !== "-") {
      this.setState((state) => {
        return {
          inputValue: state.inputValue.slice(0, -1) + value
        }
      });
    }
    else if ((/[*+/]$/).test(this.state.inputValue) === true && value === "-") {
      this.setState((state) => {
        return {
          inputValue: state.inputValue + value
        }
      });
    }
    else if (value !== "-") {
      this.setState((state) => {
        return {
          inputValue: state.inputValue.slice(0, -2) + value
        }
      });
    }
  }
  // For input value clear
  handleClear = () => {
    this.setState({
      inputValue: "0",
    });
  }
  // For input value calculation
  handleCalculate = () => {
    if ((/[*+-/]$/).test(this.state.inputValue) === true) {
      this.setState( {
        inputValue: eval(this.state.inputValue.slice(0, -1))
      });
    }
    else {
      this.setState( {
        inputValue: eval(this.state.inputValue)
      });
    }
  }
  render() {
    return (
      <div className="Javascript-calculator">
        <div className="Calculator-frame">
          <div id="display">
            {this.state.inputValue}
          </div>
          <div className="Buttons">
            <Button id="clear" size="lg" color="danger" onClick={this.handleClear}>AC</Button>
            <Button id="divide" size="lg" color="info" value="/" onClick={this.handleOperator}>&divide;</Button>
            <Button id="multiply" size="lg" color="info" value="*" onClick={this.handleOperator}>&times;</Button>
            <Button id="seven" size="lg" color="secondary" value="7" onClick={this.handleChange}>7</Button>
            <Button id="eight" size="lg" color="secondary" value="8" onClick={this.handleChange}>8</Button>
            <Button id="nine" size="lg" color="secondary" value="9" onClick={this.handleChange}>9</Button>
            <Button id="subtract" size="lg" color="info" value="-" onClick={this.handleOperator}>-</Button>
            <Button id="four" size="lg" color="secondary" value="4" onClick={this.handleChange}>4</Button>
            <Button id="five" size="lg" color="secondary" value="5" onClick={this.handleChange}>5</Button>
            <Button id="six" size="lg" color="secondary" value="6" onClick={this.handleChange}>6</Button>
            <Button id="add" size="lg" color="info" value="+" onClick={this.handleOperator}>+</Button>
            <Button id="one" size="lg" color="secondary" value="1" onClick={this.handleChange}>1</Button>
            <Button id="two" size="lg" color="secondary" value="2" onClick={this.handleChange}>2</Button>
            <Button id="three" size="lg" color="secondary" value="3" onClick={this.handleChange}>3</Button>
            <Button id="equals" size="lg" color="warning" value="=" onClick={this.handleCalculate}>=</Button>
            <Button id="zero" size="lg" color="secondary" value="0" onClick={this.handleZero}>0</Button>
            <Button id="decimal" size="lg" color="secondary" value="." onClick={this.handleDecimal}>.</Button>
          </div>
        </div>
        <footer>
          <p>Made by <a href="https://github.com/Shaikot007" target="_blank" rel="noopener noreferrer">Shaikot</a></p>
        </footer>
      </div>
    );
  }
}

export default Calculator;