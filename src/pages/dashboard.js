import React, { Component } from 'react';

import HeaderComponent from '../components/header';
import SideBarComponent from '../components/sidebar';
import ContentComponent from '../components/content';

import DataSharingContext from '../context/data-sharing-context';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : ''
    }
  }

  receivedValue = (value) => {
    this.setState({
      data : value
    })
  }

  render() {
    return (
      <DataSharingContext.Provider value={{
        message : "Hello from dashboard component",
        fromSearch : this.receivedValue,
        searchMessage : this.state.data
      }}>
          <div className="wrapper">
          <HeaderComponent></HeaderComponent>
          <div className="body">
            <SideBarComponent></SideBarComponent>
            <ContentComponent></ContentComponent>
          </div>
        </div>
      </DataSharingContext.Provider>
    
    );
  }
}

export default Dashboard;