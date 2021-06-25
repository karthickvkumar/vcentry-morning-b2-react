import React, {Component} from 'react';

class FooterComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }

  onHandleInput = (event) => {
    console.log(event.target.value, event.target.name)
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onLogin(){
    console.log(this.state)
  }

  render(){
    return(
      <div className="login-form">
        <div>
          <label className="label">Enter Email Id:</label>
          <input type="email" name="email" className="input" placeholder="Enter your email id..." onChange={this.onHandleInput}/>
        </div>
        <div className="m-top-15">
          <label className="label">Enter Password:</label>
          <input type="password" name="password" className="input" placeholder="Enter your password..." onChange={this.onHandleInput}/>
        </div>
        <div className="m-top-15">
          <button onClick={() => { this.onLogin() }}>Login</button>
        </div>
      </div>
    )
  }
}

export default FooterComponent;