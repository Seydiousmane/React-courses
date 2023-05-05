import React, { Component } from 'react';
import countHits from './countHits';

class Goku extends Component {

    
    render() {
        const {name, addOneHit, hocState, life} = this.props;
        const lifeValue = life > 0 ? (<td>{life} %</td>) : (<td><span className="badge badge-danger">Mort</span></td>)
        const button = life > 0 ? (<button onClick={addOneHit} className='btn btn-success m-3'>{name} Frappe</button>) 
        : (<button className='btn btn-danger disabled m-3'>{name} Mort</button>)
        return (
            <div className='col'>
                <img /><br />
                {button}

                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>Coups </th>
                            <th scope='col'>Life </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hocState.hits} </td>
                            {lifeValue}
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default countHits(Goku, 20);
