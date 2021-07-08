import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class RegisterPage extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      register : {
        firstName : '',
        lastName : '',
        email : '',
        password  : '',
        dateOfBirth : '',
        gender : '',
        hobbies : [],
        address : '',
        city : '',
      },
      error : {
        firstName : false,
        lastName : false,
        email : false,
        password : false,
        dateOfBirth : false,
        gender : false,
        hobbies : false,
        address : false,
        city : false,
      }
      
      
    }
  }

  onHandleInput = (event) => {
    if(event.target.type === "checkbox"){
      if(event.target.checked){
        this.state.register.hobbies.push(event.target.value);
      }
      else{
        const index = this.state.register.hobbies.findIndex((value) => {
          return value === event.target.value
        });
        this.state.register.hobbies.splice(index, 1);
      }

      this.setState({
        register : { ...this.state.register, hobbies : this.state.register.hobbies }
      })
    }
    else{
      this.setState({
        register : { ...this.state.register, [event.target.name] : event.target.value  }
      })
    }
  }

  createAccount(){

    for(let key in this.state.register){
      if(key === 'hobbies'){
        if(this.state.register.hobbies.length === 0){
          this.state.error.hobbies = true;
        }else{
          this.state.error.hobbies = false;
        }
      }
      else if(this.state.register[key] === ''){
        this.state.error[key] = true; 
      }
      else{ 
        this.state.error[key] = false; 
      }
    }

    this.setState({
      error : this.state.error
    })

  }

  onInputFocus = (event) => {
    this.setState({
      error : {...this.state.error, [event.target.name] : false}
    })
    
  }
  
  onInputBlur = (event) => {
    const value = event.target.value;
    if(value.length === 0){
      this.setState({
        error : { ...this.state.error , [event.target.name] : true}
      })
    }

  }

  render() {
    return (
      <div className="login-form">
          <h2>Create your Account</h2>
          <div>
            <label className="label">Enter your First Name </label>
            <input type="text" className="input" name="firstName" placeholder="Please enter first name.." onChange={this.onHandleInput} onFocus={this.onInputFocus} onBlur={this.onInputBlur}/>
            { this.state.error.firstName && 
              <div>
                <span className="error-msg">Please enter a valid user first name</span>
              </div>
             }
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Last Name </label>
            <input type="text" className="input" name="lastName" placeholder="Please enter last name.." onChange={this.onHandleInput}  onFocus={this.onInputFocus} onBlur={this.onInputBlur}/>
            { this.state.error.lastName &&  
            <div>
              <span className="error-msg">Please enter a valid user last name</span>
            </div>}
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Email Id </label>
            <input type="text" className="input" name="email" placeholder="Please enter email id.." onChange={this.onHandleInput} onFocus={this.onInputFocus} onBlur={this.onInputBlur}/>
            { this.state.error.email && <div><span className="error-msg">Please enter a valid email id</span></div>}
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Password </label>
            <input type="password" className="input" name="password" placeholder="Please enter password.." onChange={this.onHandleInput}  onFocus={this.onInputFocus} onBlur={this.onInputBlur}/>
            { this.state.error.password && <div><span className="error-msg">Please enter a valid password</span></div>}
          </div>
          <div className="m-top-15">
            <label className="label">Select your D.O.B </label>
            <input type="date" className="input" name="dateOfBirth" onChange={this.onHandleInput}/>
            { this.state.error.dateOfBirth &&  
            <div>
              <span className="error-msg">Please enter a valid date of birth</span>
            </div>}
          </div>
          <div className="m-top-15">
            <label className="label">Select your Gender </label>
            <input type="radio" name="gender" value="male" onChange={this.onHandleInput}/>Male
            <input type="radio" name="gender" value="female" onChange={this.onHandleInput}/>Female
            <input type="radio" name="gender" value="do now wish to specify" onChange={this.onHandleInput}/>Others
            { this.state.error.gender &&  
            <div>
              <span className="error-msg">Please select any gender</span>
            </div>}
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Hobbies </label>
            <input type="checkbox" className="m-left-10" name="hobbies" value="cricket" onChange={this.onHandleInput}/>Cricket
            <input type="checkbox" className="m-left-10" name="hobbies" value="hockey" onChange={this.onHandleInput}/>Hockey
            <input type="checkbox" className="m-left-10" name="hobbies" value="football" onChange={this.onHandleInput}/>Football
            <input type="checkbox" className="m-left-10" name="hobbies" value="chess" onChange={this.onHandleInput}/>Chess
            <input type="checkbox" className="m-left-10" name="hobbies" value="carrom" onChange={this.onHandleInput}/>Carrom
            { this.state.error.hobbies &&  
            <div>
              <span className="error-msg">Please select any hobbies</span>
            </div>}
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Address</label>
            <textarea placeholder="Please enter address" name="address" className="text-box" onChange={this.onHandleInput} onFocus={this.onInputFocus} onBlur={this.onInputBlur}></textarea>
            { this.state.error.address &&  
            <div>
              <span className="error-msg">Please enter a valid address</span>
            </div>}
          </div>
          <div className="m-top-15">
            <label className="label">Select your City</label>
            <select className="input" defaultValue="" onChange={this.onHandleInput} name="city">
              <option value="" disabled>Please select any City</option>
              <option value="CH">Chennai</option>
              <option value="BOM">Mumbai</option>
              <option value="HYD">Hydrabad</option>
              <option value="KO">Cochin</option>
              <option value="DH">Delhi</option>
              <option value="BLORE">Banglore</option>
              <option value="KOL">Kolakatha</option>
            </select>
            { this.state.error.city &&  
            <div>
              <span className="error-msg">Please select any city</span>
            </div>}
          </div>
          <div className="m-top-15">
            <button onClick={() => { this.createAccount(); }}>Create My Account</button>
          </div>
          <NavLink to="/">Go back to Login Page</NavLink>
      </div>
    );
  }
}

export default RegisterPage;