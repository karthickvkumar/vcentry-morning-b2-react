import React, { Component } from 'react';
import axios from 'axios';

class TrashPage extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      edit : {
        name : '',
        job : ''
      }
    }
  }

  onHandleInput = (event) => {
    this.setState({
      edit : {...this.state.edit, [event.target.name] : event.target.value}
    })
  }

  onUpdate(){
    console.log(this.state.edit)

    const url = "https://reqres.in/api/users/2";

    axios.put(url, this.state.edit)
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
        <h1>This is a TRASH PAGE</h1>
        <div>
          <label>Edit Username :</label>
          <input type="text" name="name" placeholder="Edit username.." onChange={this.onHandleInput}/>
        </div>
        <div>
          <label>Edit Job :</label>
          <input type="text" name="job" placeholder="Edit job.." onChange={this.onHandleInput}/>
        </div>
        <div>
          <button onClick={() => this.onUpdate()}>Update Info</button>
        </div>
      </div>
    );
  }
}

export default TrashPage;