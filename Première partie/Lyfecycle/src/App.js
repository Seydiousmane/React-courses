import React, { Component } from 'react';
import './App.css';
import Forms from './components/Forms';
import Lifecycle from './LifeCycle';


class App extends Component {
  state = {
    display: true
  }

  AfficherOuCacher = () =>{
    this.setState({
      display: !this.state.display
    })
  }
  
  render (){
    const showComponent = this.state.display ? (<Lifecycle name="Toto 2" />) : (<div></div>)
    return (
      <div className='Apps'>
        { showComponent }
        <button onClick={this.AfficherOuCacher}>Cliquer ici</button>
      </div>
    )

  }
    
}

export default App;
