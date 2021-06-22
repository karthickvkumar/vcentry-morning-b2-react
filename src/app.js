import React, { Component } from 'react';

import HeaderComponent from './components/header';
import SideBarComponent from './components/sidebar';
import ContentComponent from './components/content';
import FooterComponent from './components/footer';

class App extends Component{
  render(){
    return(
      <div>
        <HeaderComponent></HeaderComponent>
        <SideBarComponent></SideBarComponent>
        <ContentComponent></ContentComponent>
        <FooterComponent></FooterComponent>
      </div>
    )
  }
}

export default App;