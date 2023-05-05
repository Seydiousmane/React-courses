import React, { Component } from 'react'

const MyRefs = React.forwardRef((props, ref) => { 

    console.log(props)
    console.log(ref);
    return (
        <div>
            {/* Récupeérer le ref et le mettre dans un component */}
            <input ref={ref} type="text" />
            
        </div>
    )
}

)


export default MyRefs
