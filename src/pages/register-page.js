import React, { Component } from 'react';

class RegisterPage extends Component{
 
  render() {
    return (
      <div className="login-form">
          <h2>Create your Account</h2>
          <div>
            <label className="label">Enter your First Name </label>
            <input type="text" className="input" placeholder="Please enter first name.."/>
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Last Name </label>
            <input type="text" className="input" placeholder="Please enter last name.."/>
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Email Id </label>
            <input type="text" className="input" placeholder="Please enter email id.."/>
          </div>
          <div className="m-top-15">
            <label className="label">Enter your Password </label>
            <input type="text" className="input" placeholder="Please enter password.."/>
          </div>
          <div className="m-top-15">
            <label className="label">Select your D.O.B </label>
            <input type="date" className="input"/>
          </div>
          <div className="m-top-15">
            <label className="label">Select your Gender </label>
            <input type="radio" name="gender" />Male
            <input type="radio" name="gender"/>Female
            <input type="radio" name="gender"/>Others
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
            <textarea placeholder="Please enter address" className="text-box"></textarea>
          </div>
          <div className="m-top-15">
            <label className="label">Select your City</label>
            <select className="input" defaultValue="">
              <option value="" disabled>Please select any City</option>
              <option>Chennai</option>
              <option>Mumbai</option>
              <option>Hydrabad</option>
              <option>Cochin</option>
              <option>Delhi</option>
              <option>Banglore</option>
              <option>Kolakatha</option>
            </select>
          </div>
          <div className="m-top-15">
            <button>Create My Account</button>
          </div>
      </div>
    );
  }
}

export default RegisterPage;