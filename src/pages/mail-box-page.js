import React, { Component } from 'react';
import {BrowserRouter, NavLink, Switch, Route} from 'react-router-dom';

import InboxPage from './inbox-page';
import SentPage from './sent-page';
import TrashPage from './trash-page';

class MailBoxPage extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="header"></div>
          <div className="body">
            <div className="sidebar">
                <NavLink to="/mail/inbox" className="btn" activeClassName="active-btn">Inbox</NavLink>
                <NavLink to="/mail/sent" className="btn" activeClassName="active-btn">Sent</NavLink>
                <NavLink to="/mail/trash" className="btn" activeClassName="active-btn">Trash</NavLink>
            </div>
            <div className="content">
              <Switch>
                <Route path="/mail/inbox" component={InboxPage}></Route>
                <Route path="/mail/sent"  component={SentPage}></Route>
                <Route path="/mail/trash"  component={TrashPage}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default MailBoxPage;