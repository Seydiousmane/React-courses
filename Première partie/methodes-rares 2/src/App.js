import React, { Component } from 'react';
import './App.css';
import ParentComponents from './components/ParentComponents';



class App extends Component {
  
  render(){
    return(
      <div>
        <ParentComponents />
      </div>
    )
  }
    
}

export default App;
