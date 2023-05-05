import React, { Component } from 'react';
import hocComponent from './hocComponent';

class Goku extends Component {

    render() {

        const {addClick, bgState} = this.props
        return (
            <div className={`col ${bgState.bg}`}>
                <div onClick={addClick} >Goku</div>
            </div>
        )
    }
}

export default hocComponent(Goku);
