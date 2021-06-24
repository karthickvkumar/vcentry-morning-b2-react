import React, { Component } from 'react';

class HeaderComponent extends Component{

  render(){
    const styles = {
      headerText : {
        color : 'white',
        backgroundColor : 'red'
      },
      border : {
        border : '2px solid blue'
      }
    }

    return(
      <div className="border" style={styles.headerText}>
        <h1 style={styles.border}>This is a Header Component</h1>
      </div>
    )
  }
}

export default HeaderComponent;