import React, { Component } from 'react';

class Child extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  onHandleInput = (event) => {
    console.log(event.target.value)

    this.props.onLoadName(event.target.value)
  }

  render() {
    return (
      <div>
        <h1>This is a CHILD COMPONENT</h1>
        <h1>UserName - {this.props.name}</h1>
        <div>
          <label>Enter your Name : </label>
          <input type="text" placeholder="Enter your name.." onChange={this.onHandleInput}/>
        </div>
      </div>
    );
  }
}

export default Child;