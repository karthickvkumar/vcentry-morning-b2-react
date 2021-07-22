import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegisterPage from './pages/register-page';
import LoginPage from './pages/login-page';
import HomePage from './pages/home-page';
import MailBoxPage from './pages/mail-box-page';
import Dashboard from './pages/dashboard';

import './styles/main.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LoginPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/mail" component={MailBoxPage}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;