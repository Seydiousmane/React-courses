import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }

    static getDerivedStateFromError(error){
        //Mettre à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
        return {hasError: true}
    }

    /* componentDidCatch(error, info){
        //Vous pouvez aussi enregistrer l'erreur au service d'un rapport
        LogErrorToMyService(error, info)
    } */

    render() {
        if (this.state.hasError) {
            return (
                <div className="col bg-danger">
                    <p style={{ color: '#ffffff'}}>Oups, Vous avez un problème</p>
                </div>
            )
        }

        return this.props.children
    }
    
}

export default ErrorBoundary;