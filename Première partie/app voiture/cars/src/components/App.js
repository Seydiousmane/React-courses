import React, { Component } from 'react'
import MyCars2 from './MyCars2';

class App extends Component {
    state = {
        title: "Mon titre"
    }

    changeTitle = (e) => {
        this.setState({
            title: "Mon nouveau titre en dur"
        })
    }

    changeViaParam = (titre) => {
        this.setState({
            title: titre
        })
    }

    changeViaBind = (param) => {
        this.setState({
            title: param
        })
    }

    changeViaInput = (e) => {
        this.setState({
            title:  e.target.value
        })
    }
    render() {
        return (
            <div className='app'>
                <MyCars2 title={this.state.title}/>
                <button onClick={this.changeTitle}>Changer le nom en dur</button>
                <button onClick={() => this.changeViaParam("Mon titre via Param")}>Via Param</button>
                <button onClick={() => this.changeViaBind.bind(this, "Mon titre via Bind")}>Via Bind</button>
                <input type="text" onChange={this.changeViaInput} value={this.state.title} />
            </div>
            
        )
    }
}

export default App;