import React, { Component } from 'react'

class MyComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Spiderman'
        }
        console.log('Je suis dans le constructor()')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('%c getDerivedStateFromProps lancé', 'color:red; background:yellow; font-size:15px')

        console.log(props);
        console.log(state);
        
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Je suis dans shouldComponentUpdate')
        return true;
    }
    
    forcerChangemment = () => {
        this.forceUpdate(() => {
            console.log('Je force le changement')
        })
    }

    render() {
        console.log('Je suis dans le render()')
        return (
            <div>
                <p>Nom: {this.state.name}</p>
                <p>Age: {this.props.age}</p>
                <button onClick={this.forcerChangemment}>Forcer</button>
            </div>
        )
    }
}

export default MyComponent
