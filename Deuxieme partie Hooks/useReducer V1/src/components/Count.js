import React, {useReducer} from 'react'

/* const initialstate = {
    countOne: 0,
    countTwo: 0
}


const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'increment':
                return {...state, countOne: state.countOne + action.value}

        case 'decrement':
            return {...state, countOne: state.countOne - action.value}

        case 'increment2':
            return {...state, countTwo: state.countTwo + action.value}

        case 'decrement2':
            return {...state, countTwo: state.countTwo - action.value}

        case 'reinit':
            return initialstate
        
        default:
            return state
    }
}

function Count() {
    const [count, dispatch] = useReducer(reducer, initialstate)
    return (
        <div className='row'>
            <div className='col-6 coll'>
                <p className='h1'>{count.countOne}</p>
                <button className='btn btn-success' onClick={() => dispatch({type: 'increment', value: 1})}>+</button>
                <button className='btn btn-danger' onClick={() => dispatch({type: 'decrement', value: 1})}>-</button>
            </div>

            <div className='col-6 coll'>
                <p className='h1'>{count.countTwo}</p>
                <button className='btn btn-success' onClick={() => dispatch({type: 'increment2', value: 1})}>+</button>
                <button className='btn btn-danger' onClick={() => dispatch({type: 'decrement2', value: 1})}>-</button>
            </div>

            <div className='col coll'>
                <button className='btn btn-primary' onClick={() => dispatch({type: 'reinit'})}>0</button>
            </div>
        </div>
        
        
    )
} */

const initialstate = 0
const reducer = (state, action){
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return  state - 1
        case 'reinit':
            return initialstate
    }
}

function Count() {
    const [count, dispatch] = useReducer(reducer, initialstate)
        return (
            <div>
                <h1>{count}</h1>
                <button className='btn btn-success m*3' onClick={()=>dispatch('increment')}> + </button>
                <button className='btn btn-danger m*3' onClick={()=>dispatch('decrement')}> - </button>
                <button className="btn btn-danger mt-3" onClick={()=>dispatch('reinit')}> 0 </button>
            </div>
        )
    
}

export default Count