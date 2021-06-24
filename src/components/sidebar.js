import React , {Component} from 'react';

class SideBarComponent extends Component{

  homePage(){
    alert('HOME PAGE');
  }
  
  inboxPage(){
    alert('INBOX PAGE');
  }
  
  profilePage(){
    alert('PROFILE PAGE');
  }

  render(){
    return(
      <div className="width-50">
        <h1>This is a Sidebar Component</h1>
        <div>
          <button className="btn" onClick={() => { this.homePage() }}>Home</button>
          <button className="btn" onClick={() => { this.inboxPage() }}>Imbox</button>
          <button className="btn" onClick={() => { this.profilePage() }}>Profile</button>
        </div>
      </div>
    )
  }
}

export default SideBarComponent;