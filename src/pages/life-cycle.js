import React, { Component } from 'react';

class LifeCycle extends Component {

  constructor(props){
    super(props);
    console.log("Called Constructor Method");
    this.state = {
      name : 'Mr.A'
    }
  }
  
  componentWillMount(){
    console.log("Called componentWillMount Method")
  }
  
  componentDidMount(){
    console.log("Called componentDidMount Method")
  }
  
  onChangeName(){
    this.setState({
      name : "Mr.B"
    })
  }
  
  shouldComponentUpdate(nextprops, nextstate){
    console.log(this.state.name, nextstate)
    console.log("Called shouldComponentUpdate Method")
    if(this.state.name === nextstate.name){
      return false;
    }else{
      return true;
    }
  }
  
  componentWillUpdate(){
    console.log("Called componentWillUpdate Method")
  }
  
  componentDidUpdate(){
    console.log("Called componentDidUpdate Method")
  }
  
  componentWillUnmount(){
    console.log("Called componentWillUnmount Method")
  }

  render() {
    console.log("Called Render Method")

    return (
      <div>
        <h1>This is a Life Cycle Component</h1>
        <h1>The user name is : {this.state.name}</h1>
        <button onClick={() => this.onChangeName()}>Change Name</button>
      </div>
    );
  }
}

export default LifeCycle;