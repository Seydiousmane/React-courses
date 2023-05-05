import React from 'react';
import ClassState from './components/ClassState';
import FunctionState from './components/FunctionState';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
    
    return (
      <div>
        <h1 className='text-center'>UseState Hooks</h1>
        <ClassState />
        <hr />
        <FunctionState />
      </div>
      
    );
  
}

export default App;