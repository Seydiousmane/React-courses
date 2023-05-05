import React, { Component } from 'react'
import FunctionComp from './FunctionComp'
import PureComp from './PureComponent'
import SimpleComponents from './SimpleComponents'

class ParentComponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Spiderman'
        }
    }
    
    

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Je suis dans le shouldComponentUpdate() Parent ')
        console.log(this.state.name)
        console.log(nextState)

        /* if (this.state.name !== nextState.name){
            return true;
        } */
        return true
    }
    
    changeToBatman = () => {
        this.setState({
            name: 'Batman'
        })
    }

    render() {
        console.log(this.state.name)
        console.log('%c Je suis dans le render du composant PARENT', 'color:red')
        return (
            <div>
               <SimpleComponents name={this.state.name} />
               <PureComp name={this.state.name} />
               <FunctionComp name={this.state.name} />
               <button onClick={this.changeToBatman}>Changer en Batman</button>
            </div>
        )
    }
}

export default ParentComponents
