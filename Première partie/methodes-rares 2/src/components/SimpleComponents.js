import React, { Component } from 'react'

class simpleComponents extends Component {
    render() {
        console.log('%c Je suis dans le render du composant ENFANT', 'color:blue')
        return (
            <div>
                Hello 
            </div>
        )
    }
}

export default simpleComponents
