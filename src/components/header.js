import React, { Component } from 'react';
import SearchComponenet from './search';

class HeaderComponent extends Component{

  render(){
 
    return(
      <div className="header">
        <h1>Header Page</h1>
        <SearchComponenet></SearchComponenet>
      </div>
    )
  }
}

export default HeaderComponent;