import React, { Component } from 'react'
import  ReactDOM from 'react-dom'
import App from '../App'

class Modal extends Component {

    constructor(props) {
        super(props);
    
        this.popUpContainer = document.createElement('div');
        document.body.appendChild(this.popUpContainer);
        /* Cette methode fait rester le noeud aprés la fermeture du Modal. Utilisons les méthodes de 
        cycle de vie React notamment la méthode componentWillUnmount() pour résoudre cela */
    }

    componentWillUnmount() {
        document.body.removeChild(this.popUpContainer);
    }
    
    

    render () {
        return ReactDOM.createPortal (
            <div className='modal' onClick={this.props.close} >
                <div>
                    <p>Sunt quis ad reprehenderit occaecat commodo eiusmod exercitation sunt aliquip aute deserunt fugiat consequat. Proident dolore ea cillum tempor sint eiusmod exercitation. Excepteur eu occaecat velit sint ut. Officia sunt proident dolor irure qui do commodo nostrud cillum exercitation consectetur incididunt. Sunt proident eu ad officia ullamco minim eiusmod aliquip enim. Dolore non Lorem magna nulla et sunt occaecat dolore officia.</p>
                    <button>Fermer</button>
                </div>
            </div>,
            this.popUpContainer
        )
    }
}

/* Pour des raisons de propagation on va mettre faire appel à la méthode hideModal() dans la div parente afin
de permettre la fermeture du modal quand on clique aussi bien in et outside du modal dans la phase de bouillonnement */

/* Tout fonctionne bien jusqu'ici sauf si on a position relative qui affiche le modal à l'intérieur de la div App.
On aura besoin de portal pour externaliser l'affichage du modal dans une div #  */

export default Modal
