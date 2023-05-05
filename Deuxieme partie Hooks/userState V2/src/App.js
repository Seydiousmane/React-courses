import React from 'react';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TodoList from './components/TodoLists';


function App() {
    
    return (
      <div className='container'>
        <TodoList />
      </div>
      
    );
  
}

export default App;