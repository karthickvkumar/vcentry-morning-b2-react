import React, { Component } from 'react';
import Child from '../components/child';

class Parent extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : 'John Harrison',
      message : ''
    }
  }

  onReceiveName = (value) => {
    console.log(value);
    this.setState({
      message : value
    })
  }

  render() {
    return (
      <div>
        <h1>New Message : {this.state.message}</h1>
        <h1>This is a PARENT COMPONENT</h1>
        <Child name={this.state.username} {...this.state} 
          onLoadName={this.onReceiveName}></Child>
      </div>
    );
  }
}

export default Parent;