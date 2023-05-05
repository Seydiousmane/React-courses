import React, { Component } from 'react'
import Car1 from './Car1'

class MyCars2 extends Component {
    state = {
        voitures: [
            {name: 'Ford', color: 'red', year: 2000},
            {name: 'Peugeot', color: 'green', year: 1998},
            {name: 'Mercedes', color: 'gray', year: 2010}
        ],
        titre: 'Mon catalogue 2'
    }

    addTenYears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10
        })
        this.setState({
            updatedState
        })
    }
    
    render() {
        const year = new Date.getFullYear();

        return ( 
            <div>
                {
                    this.state.voitures.map((index, voiture) => {
                        return(
                            <Car1 key={index} color={voiture.color} year={year - voiture.year > 0 ? year - voiture.year + " ans" : year - voiture.year + " an" } name={voiture.name} />
                        )
                    })
                }   
            </div>

        )
    }
}


export default MyCars2