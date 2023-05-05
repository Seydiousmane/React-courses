import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MyContext } from './components/MyContext';


class App extends Component {
  state = {
    user : {
      name: 'Lisa',
      age: 8
    }
  }
  render() {
    
    return (
     /*  <MyContext.Provider value={this.state.user}> */
        <Profile info={this.state.user}/>
     /*  </MyContext.Provider> */
    );
  }
  
}

export default App;