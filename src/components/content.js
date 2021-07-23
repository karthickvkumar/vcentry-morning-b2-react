import React, { Component } from 'react';
import ProductList from './product-list';

class ContentComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      userName : ''
    }
  }

  render(){
    return(
      <div className="content">
         <h1>Content Page</h1> 
         <ProductList></ProductList>
      </div>
    )
  }
}

export default ContentComponent;