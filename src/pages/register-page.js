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
      city : ''
    }
  }

  onHandleInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  createAccount(){
    console.log(this.state)
  }

  render() {
    return (
      <div className="login-form">
          <h2>Create your Account</h2>
          <div>
            <label className="label">Enter your First Name </label>
            <input type="text" className="input" name="firstName" placeholder="Please enter first name.." onChange={this.onHandleInput}/>
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Last Name </label>
            <input type="text" className="input" name="lastName" placeholder="Please enter last name.." onChange={this.onHandleInput}/>
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Email Id </label>
            <input type="text" className="input" name="email" placeholder="Please enter email id.." onChange={this.onHandleInput}/>
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Password </label>
            <input type="text" className="input" name="password" placeholder="Please enter password.." onChange={this.onHandleInput}/>
          </div>
          <div className="m-top-15">
            <label className="label">Select your D.O.B </label>
            <input type="date" className="input" name="dateOfBirth" onChange={this.onHandleInput}/>
          </div>
          <div className="m-top-15">
            <label className="label">Select your Gender </label>
            <input type="radio" name="gender" value="male" onChange={this.onHandleInput}/>Male
            <input type="radio" name="gender" value="female" onChange={this.onHandleInput}/>Female
            <input type="radio" name="gender" value="do now wish to specify" onChange={this.onHandleInput}/>Others
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Hobbies </label>
            <input type="checkbox" className="m-left-10"/>Cricket
            <input type="checkbox" className="m-left-10"/>Hockey
            <input type="checkbox" className="m-left-10"/>Football
            <input type="checkbox" className="m-left-10"/>Chess
            <input type="checkbox" className="m-left-10"/>Carrom
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Address</label>
            <textarea placeholder="Please enter address" name="address" className="text-box" onChange={this.onHandleInput}></textarea>
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
          </div>
          <div className="m-top-15">
            <button onClick={() => { this.createAccount(); }}>Create My Account</button>
          </div>
      </div>
    );
  }
}

export default RegisterPage;