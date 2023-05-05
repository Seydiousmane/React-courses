import React, { PureComponent } from "react";

class PureComp extends PureComponent{

    /* Son shouldComponentUpdate (à ne pas déclarer ici) se charge d'effectuer
    une comparaison de surface des props et de l'état local 
    La comparaison de surface consiste à comparer prevState avec le state courant ou prevProps avec le props
    actuel => retourne True s'il constate une différence et appelle la méthode render
    */
    render(){
        console.log('%c Je suis dans le render du PurecCmponent ENFANT', 'color:green')
        return(
            <div>
                Pure Component
            </div>
        )
    }
}

export default PureComp;