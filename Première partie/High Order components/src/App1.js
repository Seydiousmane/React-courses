import React, { Component } from 'react';
import Vegeta1 from './components/Vegeta1';
import Goku1 from './components/Goku1';

class App1 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       vegeta1: 100,
       goku1: 100
    }
  }

  reduceLife = (param) => {
    if (param === "Goku1"){
      this.setState({
        vegeta1: this.state.vegeta1 - 10
      })
    } else {
      this.setState({
        goku1: this.state.goku1 - 10
      })
    }
  }

  
  render() {
    return (
        <div>
          <Goku1 name="Goku1" reduceHandler={this.reduceLife} life={this.state.goku1} />
          <Vegeta1 name="Vegeta1" reduceHandler={this.reduceLife} life={this.state.vegeta1} />
        </div>
    );
  }
}

export default App1;
