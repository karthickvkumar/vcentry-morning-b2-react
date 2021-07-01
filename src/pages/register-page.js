import React, { Component } from 'react';

class RegisterPage extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      firstName : '',
      lastName : '',
      email : '',
      password  : '',
      dateOfBirth : '',
      gender : '',
      hobbies : [],
      address : '',
      city : '',
      error_firstName : false,
      error_lastName : false,
      error_email : false,
      error_password : false,
      error_dateOfBirth : false,
      error_gender : false,
      error_hobbies : false,
      error_address : false,
      error_city : false,
    }
  }

  onHandleInput = (event) => {
    if(event.target.type === "checkbox"){
      if(event.target.checked){
        this.state.hobbies.push(event.target.value);
      }
      else{
        const index = this.state.hobbies.findIndex((value) => {
          return value === event.target.value
        });
        this.state.hobbies.splice(index, 1);
      }

      this.setState({
        hobbies : this.state.hobbies
      })
    }
    else{
      this.setState({
        [event.target.name] : event.target.value
      })
    }
  }

  createAccount(){
    console.log(this.state)
  }

  onInputFocus = (event) => {
    // console.log("ON FOCUS ",event.target)
    const key = "error_" + event.target.name;
    this.setState({
      [key] : false
    })
    
  }
  
  onInputBlur = (event) => {
    // console.log("ON BLUR", event.target)
    const key = "error_" + event.target.name;
    const value = event.target.value;
    if(value.length === 0){
      this.setState({
        [key] : true
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
            { this.state.error_firstName && 
              <div>
                <span className="error-msg">Please enter a valid user first name</span>
              </div>
             }
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Last Name </label>
            <input type="text" className="input" name="lastName" placeholder="Please enter last name.." onChange={this.onHandleInput}  onFocus={this.onInputFocus} onBlur={this.onInputBlur}/>
            { this.state.error_lastName &&  
            <div>
              <span className="error-msg">Please enter a valid user last name</span>
            </div>}
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Email Id </label>
            <input type="text" className="input" name="email" placeholder="Please enter email id.." onChange={this.onHandleInput} onFocus={this.onInputFocus} onBlur={this.onInputBlur}/>
            { this.state.error_email && <div><span className="error-msg">Please enter a valid email id</span></div>}
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Password </label>
            <input type="password" className="input" name="password" placeholder="Please enter password.." onChange={this.onHandleInput}  onFocus={this.onInputFocus} onBlur={this.onInputBlur}/>
            { this.state.error_password && <div><span className="error-msg">Please enter a valid password</span></div>}
          </div>
          <div className="m-top-15">
            <label className="label">Select your D.O.B </label>
            <input type="date" className="input" name="dateOfBirth" onChange={this.onHandleInput}/>
            { this.state.error_dateOfBirth &&  
            <div>
              <span className="error-msg">Please enter a valid date of birth</span>
            </div>}
          </div>
          <div className="m-top-15">
            <label className="label">Select your Gender </label>
            <input type="radio" name="gender" value="male" onChange={this.onHandleInput}/>Male
            <input type="radio" name="gender" value="female" onChange={this.onHandleInput}/>Female
            <input type="radio" name="gender" value="do now wish to specify" onChange={this.onHandleInput}/>Others
            { this.state.error_gender &&  
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
            { this.state.error_hobbies &&  
            <div>
              <span className="error-msg">Please select any hobbies</span>
            </div>}
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Address</label>
            <textarea placeholder="Please enter address" name="address" className="text-box" onChange={this.onHandleInput} onFocus={this.onInputFocus} onBlur={this.onInputBlur}></textarea>
            { this.state.error_address &&  
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
            { this.state.error_city &&  
            <div>
              <span className="error-msg">Please select any city</span>
            </div>}
          </div>
          <div className="m-top-15">
            <button onClick={() => { this.createAccount(); }}>Create My Account</button>
          </div>

      </div>
    );
  }
}

export default RegisterPage;