import React, { Component } from 'react'


class LifeCycle1 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            nom: "Toto",
            step: 1
        }

        console.log(`Etape:${this.state.step} Je suis dans le constructeur`)
    }

    componentDidMount() { 
        console.log(`Etape:${this.state.step} Je suis dans le componentDidMount()`)
        this.setState({
            name: this.props.name,
            step: this.state.step + 1

        })

        console.log(`Etape:${this.state.step} setState() a changé dans le componentDidMount()`)
    }

    componentDidUpdate(prevProps, prevState) { 
        console.log(`Etape:${this.state.step} Je suis dans le componentDidUpdate()`)
        console.log(prevState)
        console.log(this.state)
    } 
    
    render() {
        console.log(`Etape:${this.state.step} Je suis dans le render`)
        return (
            <div>
                {console.log(`Etape:${this.state.step} Mise à jour du DOM`)}
                <p>Chargement: {this.state.step}</p>
                <p>Nom: {this.state.nom}</p>
               
            </div>
        )
    }
}

export default LifeCycle1