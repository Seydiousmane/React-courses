import React, { Component } from 'react';
import countHits from './countHits';


class Goku1 extends Component {

    

    render() {
        const {name, addOneHit, hocState, life} = this.props
        return (
            <div className='col'>
                <button className='btn btn-succes' onClick={addOneHit}>{name} Frappe</button>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>Coups</th>
                            <th scope='col'>Life</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {hocState.hits}
                            </td>
                            <td>{life} %</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
    
}

export default countHits(Goku1) ;
