import React, { Component } from 'react';
import DataSharingContext from '../context/data-sharing-context';

class SearchComponenet extends Component {

  onHandleChange = (event) => {
    this.context.fromSearch(event.target.value);
  }

  render() {
    return (
      <DataSharingContext.Consumer>
        {
          (context) => {
            return (
              <div>
                <input type="text" className="search-box" placeholder="Enter a search value" 
                onChange={this.onHandleChange}/> 
              </div>
            )
          }
        }
      </DataSharingContext.Consumer>
    );
  }
}

SearchComponenet.contextType = DataSharingContext;

export default SearchComponenet;