import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class Lifecycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Toto',
             step: 1
        }

        console.log(`Etape ${this.state.step} : Je suis dans le constructor()`);
    }

    componentDidMount() {
        console.log(`Etape ${this.state.step} : Je suis dans le componentDidMount()`);
        this.setState({
            name: this.props.name,
            step: this.state.step +1 
        })

        console.log(`Etape ${this.state.step} : setState() a changé le state dans le componentDidMount()`);
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(`Etape ${this.state.step} : Je suis dans le componentDidUpdate()`);
        console.log(this.prevState)
        console.log(this.state)

    }

    componentWillUnmount() {
        console.log('Je suis dans le componentWillunmount()')
    }
    
    

    render() {
        console.log(`Etape ${this.state.step} : Je suis dans le render()`);
        return (
            <div>
                {console.log(`Etape ${this.state.step} : Mis à jour DOM`)}
                <p>Chargement : {this.state.step}</p>
                <p>Nom : {this.state.name}</p>

                <ChildComponent />
            </div>
        )
    }
}

export default Lifecycle
