import react from "react";
import { Component } from "react";

class Games extends Component{
    state = {
        name: "Mario",
        winner: false
    }

    /* render(){
        if (this.state.winner){
            return (
                <div>
                    <h1>Bravo {this.state.name}</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>raté !!!</h1>
                </div>
            )
        } 
    }
 */
    render(){
        return this.state.winner ? (<h1>Bravo {this.state.name}</h1>) : (<h1>raté !!!</h1>)
    }

    /* render(){
        return this.state.winner && <h1>Bravo {this.state.name}</h1>
    } */
}

export default Games;