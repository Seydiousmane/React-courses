import React, { Component } from 'react';
import './App.css';
import MyRefs from './components/MyRefs';


class App extends Component {

  /* Créer un constructeur */
  constructor(props) {
    super(props)
  
    this.refComp = React.createRef()
    
  }

  handleClick = () => {
      console.log(this.refComp);
      /* On apercoit addFocus() de l'élément enfant et on peut y accéder depuis l'élément parent */
      console.log(this.refComp.current.addFocus());
  }
  
  render() {
    return (
      <div className="App">
        <MyRefs ref={this.refComp} />
  
        {/* Déplacer le bouton dans App C'est à partir de l'élément parent qu'on va cliquer pour mettre un focus 
        sur un élément qui se trouve dans le composant enfant  */}
        <button onClick={this.handleClick}>Valider</button>
      </div>
    );
  }
  
}

export default App;

