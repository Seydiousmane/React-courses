import React, { Component } from 'react';

import Goku from './components/Goku';
import Vegeta from './components/Vegeta';
import AddHits from './components/AddHits';

import './App.css';


class App extends Component {
  
  
  render(){
    return(
      <div className='container text-center'>
        <h1>Goku vs Vegeta</h1>
        <hr />
        <div className='row mainRow'>
          <AddHits
            render={
              (hits, addOne, saiyan) => (
                saiyan.vegeta && <Vegeta hits={hits} addOne={addOne} name='Vegeta' />
              )
            }
          />

          <AddHits
            render={
              (hits, addOne, saiyan) => (
                saiyan.goku && <Goku hits={hits} addOne={addOne} name='Goku' />
              )
            }
          />
        </div>
      </div>
    )
  }
    
}

export default App;
