import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      login : {
        email : '',
        password: ''
      },
      error : {
        email : false,
        password : false
      }
    }
  }

  onHandleInput = (event) => {
    this.setState({
      login : {...this.state.login, [event.target.name] : event.target.value}
    })
  }

  onLogin(){
    console.log(this.state.login)
    for(let key in this.state.login){
      if(key == 'email'){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const checkEmail = re.test(String(this.state.login.email).toLowerCase());
        this.state.error.login = !checkEmail;
      }
      else if(key == 'password'){
        const checkPassword = this.state.login.password.length === 0  ? true : false;
        this.state.error.password = checkPassword;
      }
    }

    this.setState({
      error : this.state.error
    })

    for(let key in this.state.error){
      if(this.state.error[key]){
        return;
      }
    }

    this.props.history.push("/mail/inbox", this.state.login);
  }

  render() {
    return (
      <div>
        <h1>Welcome to Login Page</h1>
        <div>
          <div>
            <label>Enter your Email ID :</label>
            <input type="text" name="email" placeholder="Please enter your email id" onChange={this.onHandleInput}/>
            {this.state.error.login && <span>Invalid Email Id</span>}
          </div>
          <div>
            <label>Enter your Password :</label>
            <input type="password" name="password" placeholder="Please enter your password" onChange={this.onHandleInput}/>
            {this.state.error.password && <span>Invalid Password</span>}
          </div>
          <div>
            <button onClick={() => {this.onLogin()}}>Login</button>
          </div>
        </div> 
        <NavLink to="/mail/inbox">Go to Mail Box</NavLink>
      </div>
    );
  }
}

export default LoginPage;