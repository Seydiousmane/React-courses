import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';
import MyComponent from './components/MyComponents';
import 'Boot'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       displayModal: false
    }

  }
  
  showModal = () => {
    this.setState({
      displayModal: true
    })
  }

  hideModal = () => {
    this.setState({
      displayModal: false
    })
  }

  render(){
    /* const modal = this.state.displayModal ? (<Modal close={this.hideModal} />) : null */
    const modal = this.state.displayModal && <Modal close={this.hideModal} />

    return (
      <div className="App">
        <button onClick={this.showModal}>Afficher le modal</button>
        {modal}
      </div>
    );
  }
  
}

export default App;
