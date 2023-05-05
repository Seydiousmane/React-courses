import React, {useRef, useState, useEffect} from 'react'
6707752
77 342 43 32 

function Input() {

    const [count, setCount] = useState(0)
    
    const setIntervalRef = useRef()

    useEffect(() => {
        setIntervalRef.current = setInterval(() => {
            setCount(prevCount => {
                return prevCount + 1
            })
        }, 1000)
        
    }, [])

    const stopCount = () => {
        clearInterval(setIntervalRef.current)
    }
    

    return (
        <div align="center">
            <h1>{count}</h1>
            <button onClick={stopCount}>Stop</button>
        </div>
    )
}

export default Input