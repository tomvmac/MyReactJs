import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 }
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 2
    }));
  }

  clearCounter = () => {
    this.setState((prevState) => ({
      counter: 0
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, Tom</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Button onClickFunction={this.incrementCounter} clearCounter={this.clearCounter}/>
          <Result counter={this.state.counter} />
        </div>
      </div>
    );
  }
}

class Button extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.onClickFunction}>
          +1
        </button>
        <button onClick={this.props.clearCounter}>Clear Counter</button>
      </div>
    );
  }

}

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
}

export default App;
