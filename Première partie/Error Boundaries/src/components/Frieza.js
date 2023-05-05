import React, { Component } from 'react';
import hocComponent from './hocComponent';

class Frieza extends Component {

    render() {
        const {addClick, bgState} = this.props
        return (
            <div className={`col ${bgState.bg}`}>
                <div onClick={addClick}>frieza</div>
            </div>
        )
    }
}

export default hocComponent(Frieza);
