import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';



class App extends Component {
  
  state = {
    age: 27
  }

  addOneYear = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1
  }))
  }

  render (){
    return (
      <div className=''>
        <MyComponent age={this.state.age} />
        <button onClick={this.addOneYear}>Changer le props</button>
      </div>
    )

  }
    
}

export default App;
