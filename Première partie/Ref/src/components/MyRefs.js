import React, { Component } from 'react'

class MyRefs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ''
        }

        /* Recupérer la valeur du titre h1 contenu dans valeur */
        this.myTitle = React.createRef()

        console.log(this.myTitle) /* Renvoie un objet qui a current null. Cet objet sera associé à l'élément correspondant */

        this.myInput = React.createRef()

    }

    updateValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    componentDidMount() {
        this.myInput.current.focus()
    }

    addFocus = () => {
        this.myInput.current.focus()
    }
    

    componentDidUpdate(prevProps, prevState) {
        this.myTitle.current.style.color = 'red'
    }

    

    /* Méthode pour afficher la valeur de Input dans le console sans passer par le DOM via target, ...
    mais plutot via le ref */
    handleClick = () => {
        console.log(this.myInput.current.value)
    }
    

    render() {
        
        return (
            <div>
                <h1 ref={this.myTitle}>Valeur: {this.state.value}</h1>
                {/* <input type="text" ref={this.myinput} value={this.state.value} onChange={this.updateValue}/> */}
                <input ref={this.myInput} type="text" />
                {/* <button onClick={this.handleClick}>Valider</button> */}
            </div>
        )
    }
}

export default MyRefs
