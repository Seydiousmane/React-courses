import React from 'react'
import Goku1 from './Goku1'
import Vegeta1 from './Vegeta1'

class App1 extends React.Component {
    
    constructor(props) {
        super(props)
      
        this.state = {
          vegeta: 100,
          goku:100
        }
    }

    reduceLife = (param) => {
        console.log(param)
        if (param === 'Goke'){
            this.setState({
                vegeta: this.state.vegeta - 10
            })
        } else {
            this.setState({
                goku: this.state.goku - 10
            })
        }
    }
    render() {
        return (
            <div>
                <Vegeta1 name="Vegeta" life={this.state.vegeta} reduceHandle={this.reduceLife} />
                <Goku1 name="Goku" life={this.state.goku} reduceHandle={this.reduceLife} />
            </div>
        )
    } 
    
}

export default App1;