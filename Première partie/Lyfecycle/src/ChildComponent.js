import React, { Component } from 'react'

export class ChildComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
        }

        console.log('Je suis dans le constructor() ENFANT');
    }

    componentDidMount() {
        console.log('Je suis dans le componentDidMount() ENFANT');
        
    }
    

    render() {
        console.log('Je suis dans le render() ENFANT');
        return (
           
            <div>
                 {console.log('Mis à jour DOM dans le composant ENFANT')}
                Hello world
            </div>
        )
    }
}

export default ChildComponent
