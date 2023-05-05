import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from '../Welcome';
import Signup from '../Signup';
import Login from '../Login';
import ErrorPage from '../ErrorPage';
import ForgetPassword from '../ForgetPassword';

import Header from '../Header';
import '../../App.css';
import Landing from '../Landing';
import Footer from '../Footer';
import { IconContext } from 'react-icons';

function App() {
    
    return (
      <Router>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle'} }}>
          <Header />
          <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/welcome" component={Welcome}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/forgetpassword" component={ForgetPassword}/>
              <Route component={ErrorPage}/>
          </Switch>
          


          <Footer />
        </IconContext.Provider>
      </Router>
      
    );
  
}

export default App;