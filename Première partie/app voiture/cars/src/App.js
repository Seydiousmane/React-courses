//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import MyCars from './components/MyCars';

class App extends Component {
  state = {
    titre: 'Mon catalogue'
  }

  changeTitle = (e) => {
    this.setState({
      titre : 'Mon nouveau titre'
    })
    console.log(e)
  }

  changeViaParam = (titre) =>{
    this.setState({
      titre: titre
    })
  }

  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value
    })
  }

  changeViaBind = (param) => {
    this.setState({
      titre: param
    })
  }
  render() {
    return (
    <div className="App">
      <MyCars /> 
      {/* 
      title={ this.state.titre}
      
      <button onClick={this.changeTitle}>Changer le nom en dur</button>
      <button onClick={() => this.changeViaParam('Titre via un param')}>Via param</button>
      <input type="text" onChange={this.changeViaInput} value={this.state.titre} />
      <button onClick={this.changeViaBind.bind(this, 'Titre via bind')}>Via bind</button> */}
    </div>
    )
  };
}

export default App;
