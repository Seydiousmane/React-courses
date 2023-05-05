import react, { Component } from "react";
import Car from './Car';

class Forms extends Component{
    state = {
        username : '',
        color: '',
        colors: ["", "red", "blue", "green", "black", "pink"],
        comment: ''
    }

    handlePseudo = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleColor = e => {
        this.setState({
            color: e.target.value
        })
    }

    handleComment = (e) =>{
        this.setState({
            comment: e.target.value
        })
    }

    handleForm = (e) => {
        e.preventDefault()
        console.log(`username: ${this.state.username} Couleur:  ${this.state.color} Comment: ${this.state.comment}`)
    }
    render(){
        return(
            <div>
                <Car color={this.state.color} />
                <h1>Commentaire</h1>
                <form onSubmit={this.handleForm}>
                    <div>
                        <label>Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo} />
                    </div>

                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index)=>{
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <label>Comment</label>
                        <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                    </div>

                    <button>Valider</button>

                </form>
        
            </div>
        )
    }

}

export default Forms;