import React from "react";

//On peut aussi utiliser à la place de props les params children et color
const Car = ({children, color, year}) => {
    
    
    const colorInfo = color ? (<p>Couleur : { color }</p>) : (<p>Néant</p>);
    if (children){
        return (
            <tr>
                <td><p>Marque : { children }</p></td>
                <td><p>Année : { year }</p></td>
                <td>{ colorInfo }</td>
            </tr>
        )
    } else {
        return null
    }
    
}

export default Car;