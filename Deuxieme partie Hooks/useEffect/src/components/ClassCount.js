import React, { Component } from 'react'

class ClassCount extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         counter: 0,
         name: ''
      }
    }

    componentDidMount() { 
        document.title = `Vous avez cliqué ${this.state.counter} fois`
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.counter !== prevState.counter) {
            console.log("Mise à jour du titre")
            document.title = `Vous avez cliqué ${this.state.counter} fois`
        }
        
    } 

    handleClick = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            <div className='text-center'>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>Cliquer ici</button>
                <input type="text" value={ this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} />
            </div>
        )
    }
}

export default ClassCount