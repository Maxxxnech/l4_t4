import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.state = { counter: 0 }; // Задали стейт!
  }

  //counter = 0;
  increment() {
    //this.state.counter++;  // WRONG!!!
    //Передача коллбэка с предыдущем состоянием prevState позволяет получить актуальное состояние
    this.setState((prevState) => {
      return { counter: ++prevState.counter };
    });
    console.log(this.state.counter);
  }
  decrement() {
    //this.state.counter--; // WRONG!!!
    //setState - асинхронная.
    //Передача коллбэка с предыдущем состоянием prevState позволяет получить актуальное состояние
    this.setState((prevState) => ({ counter: --prevState.counter }));
    console.log(this.state.counter);
  }
  render() {
    return (
      <>
        <h1>Clicker!</h1>
        <button onClick={this.increment}>++clicks: {this.state.counter}</button>
        <button onClick={this.decrement.bind(this)}>
          --clicks: {this.state.counter}
        </button>
      </>
    );
  }
}

export default Clicker;
