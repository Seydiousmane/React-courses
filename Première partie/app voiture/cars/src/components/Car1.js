import React from 'react'

const Car1 = ({name, color, year}) => {

    const colorInfo = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: Néant</p>)
    if (name) {
        return (
            <tr>
                <td><p>Marque : { name }</p></td>
                <td><p>Année : { year }</p></td>
                <td>{ colorInfo }</td>
            </tr>
            
        )
    } else {
        <p>Pas de données</p>
    }
    
}

export default Car1
