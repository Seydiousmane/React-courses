import React from 'react'

function FunctionComp(props) {
    console.log('%c Je suis dans le render du Function Component ENFANT', 'color:purple')
    return (
        <div>
            <p>
                <span>Function Component</span>
                {props.name}
            </p>
        </div>
    )
}

export default React.memo(FunctionComp)