import React, {useState, useCallback} from 'react';
import Button from './components/Button';
import Count from './components/Count';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
    
    const [countOne, setCountOne] = useState({value:0, btnColor: 'success', increment: 25})
    const [countTwo, setCountTwo] = useState({value:0, btnColor: 'danger', increment: 20})

    const incrementCountOne = useCallback((val) => {
      console.log("Je suis dans incrementCountOne")
      countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
    }, [countOne])
    

    const incrementCountTwo = useCallback((val) => {
      countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val})
      console.log("Je suis dans incrementCountTwo")
    }, [countTwo])
    
    
    return (
      <div className='container'>
        <h1 className='text-center'>UseCallback Hooks</h1>

        <Count text="countOne" count={countOne.value} bgColor={countOne.btnColor} />
        <Count text="countTwo" count={countTwo.value} bgColor={countTwo.btnColor} />
        
        <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1</Button>
        <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</Button>
        
      </div>
      
    );

  
}

export default App;

