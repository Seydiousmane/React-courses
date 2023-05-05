import React from 'react';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from './components/Container';
import ContainerFunction from './components/ContainerFunction';


function App() {
    
    return (
      <div>
        <h1 className='text-center'>Hooks nettoyage</h1>
        <Container />
        <ContainerFunction/>
      </div>
      
    );
  
}

export default App;