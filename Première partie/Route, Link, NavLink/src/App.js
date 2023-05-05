import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Community from './Components/Community';
import Docs from './Components/Docs';
import Tutorials from './Components/Tutorials';
import Menu from './Components/Menu';
import ErrorPage from './Components/ErrorPage';

import './App.css';
import Profile from './Components/Profile';

class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       underConst : {
         Docs: false,
         Tuto: true,
         Community: false
       }
    }
  }
  

  render() {
    return (
    
      <Router>
          <Menu />

          <Switch>
            <Route exact path="/">
              <Docs />
            </Route>
            
            <Route path="/tutorials" component={Tutorials}/>

          {/* <Route path="/tutorials" render={() => (
            this.state.underConst.Tuto ? (<Redirect to="/" />) : console.log(<Tutorials />)
          )} />  */}
            <Route path="/community" component={Community} />
            <Route path="/users/:profileId" component={Profile} /> 
            <Route component={ErrorPage} />
            

          </Switch>
  
      </Router>
    );
  }
  
}

export default App;
