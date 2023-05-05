import React, { Component} from "react";

const Users = (props) => {

    console.log(props)
    const {name, age} = props

    return(
        <div>
            {name} {age} ans
        </div>
    )
}

/* class Users extends Component {
    
    render(){
        console.log(this.props)

        const {name, age} = this.props

        return(
            <div>
                <p>Chanteur: {name} {age} ans</p>
            </div>
        )
    }
} */

export default Users;