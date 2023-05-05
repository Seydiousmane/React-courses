import React, { Component } from 'react';
import hocComponent from './hocComponent';

class Vegeta extends Component {

    render() {
        const {addClick, bgState} = this.props

        return (
            <div className={`col ${bgState.bg}`}>
                <div onClick={addClick} >Vegeta</div>
            </div>
        )
    }
}

export default hocComponent(Vegeta);
