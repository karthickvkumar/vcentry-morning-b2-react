import React, { Component } from 'react';

class ContentComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      userName : ''
    }
  }

  onInputChange = (event) => {  
    this.setState({
      userName : event.target.value
    });
  }

  render(){
    return(
      <div className="width-50">
        <h1>This is a Content Component</h1>
        <input type="text" placeholder="Enter a username.." onChange={this.onInputChange}/>
        <h1>{this.state.userName}</h1>
      </div>
    )
  }
}

export default ContentComponent;