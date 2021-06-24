import React, { Component } from 'react';

class ContentComponent extends Component{

  onInputChange = (event) => {  
    console.log(event.target.value)
  }

  render(){
    return(
      <div className="width-50">
        <h1>This is a Content Component</h1>
        <input type="text" placeholder="Enter a username.." onChange={this.onInputChange}/>
      </div>
    )
  }
}

export default ContentComponent;