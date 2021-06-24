import React, { Component } from 'react';

import HeaderComponent from './components/header';
import SideBarComponent from './components/sidebar';
import ContentComponent from './components/content';
import FooterComponent from './components/footer';

import './styles/main.css';

class App extends Component{
  render(){
    return(
      <div>
        <HeaderComponent></HeaderComponent>
        <div className="wrapper">
          <SideBarComponent></SideBarComponent>
          <ContentComponent></ContentComponent>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    )
  }
}

export default App;