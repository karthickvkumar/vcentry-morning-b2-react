import React, { Component } from 'react';
import axios from 'axios';

class SentPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      name : '',
      job : ''
    }
  }

  onHandleInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit(){
    const url = "https://reqres.in/api/users";

    axios.post(url, this.state)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
  }

  render() {
    return (
      <div>
        <h1>This is a SENT PAGE</h1>
        <div>
          <label>Enter Username :</label>
          <input type="text" name="name" placeholder="Enter username.." onChange={this.onHandleInput}/>
        </div>
        <div>
          <label>Enter Job :</label>
          <input type="text" name="job" placeholder="Enter jon.." onChange={this.onHandleInput}/>
        </div>
        <div>
          <button onClick={() => this.onSubmit()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default SentPage;