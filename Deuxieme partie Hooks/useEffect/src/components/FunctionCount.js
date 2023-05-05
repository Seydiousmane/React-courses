import React, { useState, useEffect } from 'react'

function FunctionCount() {

    const [count, setCount] = useState(0)

    const [name, setName] = useState('')

    /* useEffect(() => {
        setTimeout(() => {
            document.title = `Vous avez cliqué ${count} fois`
        }, 3000)
        
    }) */

    useEffect(() => {
        console.log('Mis à jour du titre')
        document.title = `Vous avez cliqué ${count} fois`
    }, [count])

    return (
        <div className='text-center'>
            <h1>{count}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => {setCount(count + 1)}}>Cliquer ici</button>
        </div>
    )
}

export default FunctionCount