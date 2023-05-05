import React, { Component } from 'react';
import vegeta from '../images/vegeta.png';

class Vegeta extends Component {

    

    render() {
        
        const { hits, addOne, name } = this.props
        return (
            <div className='col'>
                <img src={vegeta} className='vegeta'/><br />
                <button onClick={addOne} className='btn btn-success m-3'>{name} Frapper</button>
                   
                <table className='table table-striped'>
                     <thead>
                        <tr>
                            <th scope='col'>Coups </th>  
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td> {hits}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
    
}

export default Vegeta;
