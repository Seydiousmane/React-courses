import React, { Component } from 'react';
import Goku from './components/Goku';
import ErrorBoundary from './components/ErrorBoundary';
import Vegeta from './components/Vegeta';
import Frieza from './components/Frieza';
import './App.css';


class App extends Component {
  
  
  render(){
    return(
      <div className='container text-center'>
        <h1>Cliquer sur les gentils</h1>
        <div>
          <ErrorBoundary>
            <Goku/>
          </ErrorBoundary>

          <ErrorBoundary>
            <Vegeta />
          </ErrorBoundary>

          <ErrorBoundary>
            <Frieza />
          </ErrorBoundary>
        </div>
      </div>
    )
  }
    
}

export default App;
