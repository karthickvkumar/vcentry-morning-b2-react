import React, { Component } from 'react';

import HeaderComponent from '../components/header';
import SideBarComponent from '../components/sidebar';
import ContentComponent from '../components/content';

class Dashboard extends Component {
  render() {
    return (
      <div className="wrapper">
      <HeaderComponent></HeaderComponent>
      <div className="body">
        <SideBarComponent></SideBarComponent>
        <ContentComponent></ContentComponent>
      </div>
    </div>
    );
  }
}

export default Dashboard;