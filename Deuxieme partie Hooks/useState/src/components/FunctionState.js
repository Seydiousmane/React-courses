import React, { useState } from "react";

const FunctionState = () => {
    const [counter, setCounter] = useState(0)
    /* const addOne = () => {
        setCounter(counter+1)
        
                or
        
        setCounter(prevCounter => {
            return prevCounter +1 
        })
    } */
    return (
        <div className="mt-3">
            <p>Function State {counter}</p>
            <button onClick={()=> setCounter(prevCounter => prevCounter +1)}>State dans function</button>
        </div>
    )
}

export default FunctionState;