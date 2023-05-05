import React, { Component, Fragment } from "react";


class AddHits extends Component {

    state = {
        hits: 0,
        fighters: {
            vegeta: true,
            goku: true
        }
    }

    addOneHit = () => {
        this.setState(prevState => {
            return {
                hits: prevState.hits + 1
            }
        })
    }

    render(){
        return (
            <Fragment>
                {this.props.render(this.state.hits, this.addOneHit, this.state.fighters)}
            </Fragment>
            
        )
    }
}

export default AddHits;