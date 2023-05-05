import React, { Component, Fragment  } from "react";
import Car from "./Cars";


class MyCars extends Component{

    noCopy = () => {
        alert('Merci de ne pas copier')
    }
    /*
    addStyle = (e) => {
        if (e.target.classList.contains('styled')){
            e.target.classList.remove('styled');
        } else {
            e.target.classList.add('styled');
        }
        
    }*/

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

        const year = new Date().getFullYear();
        console.log(this)
        return (
            <Fragment>
                
                {/* <h1 onMouseOver={this.addStyle}>{this.props.title}</h1> */}
                <h1>{this.state.titre}</h1>
                <button onClick={this.addTenYears}>+ 10 ans</button>
                
                <table className="carsTable">
                    <tr>
                        <th>Marque</th>
                        <th>Age</th>
                        <th>Couleur</th>
                    </tr>



                {
                    this.state.voitures.map((voiture, index) => {
                        return (
                            <Fragment>
                                <Car key={index} color={voiture.color} year={year - voiture.year + " ans"}>{voiture.name}</Car>
                            </Fragment>
                        )
                    })
                }   

                </table> 

            </Fragment>

        )
    }
}

export default MyCars;