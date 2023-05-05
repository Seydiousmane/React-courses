import React, { Component } from 'react';
import './App.css';
import MyRefs from './components/MyRefs1';


class App extends Component {

  /* Créer un constructeur */
  constructor(props) {
    super(props)
  
    this.refComp = React.createRef()
    
  }

  handleClick = () => {
      this.refComp.current.focus();
  }
  
  render() {
    console.log(this.refComp)
    return (
      <div className="App">
        <MyRefs name='Toto' ref={this.refComp} />
  
        {/* Déplacer le bouton dans App C'est à partir de l'élément parent qu'on va cliquer pour mettre un focus 
        sur un élément qui se trouve dans le composant enfant  */}
        <button onClick={this.handleClick}>Valider</button>
      </div>
    );
  }
  
}

export default App;
