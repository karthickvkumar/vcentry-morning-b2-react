import React, { Component } from 'react';

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
      </div>
    )
  }
}

export default ContentComponent;