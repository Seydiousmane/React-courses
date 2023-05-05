import React from 'react';
import Count from './components/Count';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
    
    return (
      <div>
        <h1 className='text-center'>UseReducer Hooks</h1>
        <Count />
      </div>
      
    );
  
}

export default App;