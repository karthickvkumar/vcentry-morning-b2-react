import React, {Component} from 'react';

class FooterComponent extends Component{

  render(){
    return(
      <div className="border" style={{
        color : 'yellow', backgroundColor : 'black', marginTop : '5px'
      }}>
        <h1>This is Footer Component</h1>
      </div>
    )
  }
}

export default FooterComponent;