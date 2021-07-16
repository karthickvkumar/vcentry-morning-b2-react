import React, { Component } from 'react';
import axios from 'axios';

class InboxPage extends Component {

  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      userList : []
    }
  }

  componentDidMount(){
    this.listAPI();
  }
  
  listAPI(){
    
    const url = "https://reqres.in/api/users?page=2";
    axios.get(url)
        .then((response) => {
          console.log(response.data.data);
          this.setState({
            userList : response.data.data
          })
        })
        .catch((error) => {
          console.log(error)
        });

  }

  render() {
    let users = this.state.userList.map((value, index) => {
      return(
        <tr key={index}>
          <td>{value.id}</td>
          <td>{value.first_name}</td>
          <td>{value.last_name}</td>
          <td>{value.email}</td>
          <td>
            <img src={value.avatar} />
          </td>
        </tr>
      )
    });

    console.log(users)

    return (
      <div>
        <h1>This is a INBOX PAGE</h1>
        <button onClick={() => this.listAPI()}>List API</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Profile Picture</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    );
  }
}

export default InboxPage;