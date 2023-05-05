import React from 'react';
import { UserContext, ColorContext } from './components/MyContext';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Profile from './components/Profile';


class App extends React.Component {
    state = {
      user : {
        name: 'Lisa',
        age: 8
      }
    }
    
    render(){
      return (
        <div>
          <h1 className='text-center'>Use Context</h1>

          <UserContext.Provider value={this.state.user}>
            <ColorContext.Provider value={'red'}>
              <Profile />
            </ColorContext.Provider>
          </UserContext.Provider>
        </div>
        
      );
    }
    
  
}

export default App;