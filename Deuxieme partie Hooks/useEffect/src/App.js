import React from 'react';
import ClassCount from './components/ClassCount';
import FunctionCount from './components/FunctionCount';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
    
    return (
      <div>
        {/* <ClassCount />*/}
        <FunctionCount /> 
      </div>
      
    );
  
}

export default App;