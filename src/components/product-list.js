import React, { Component } from 'react';
import DataSharingContext from '../context/data-sharing-context';

class ProductList extends Component {
  render() {
    return (
      <DataSharingContext.Consumer>
        {
          (context) => {
            return (
              <div>
                <h1>This is product list component</h1>
                <h1>The search result is {context.searchMessage}</h1>
              </div>
            )
          }
        }
      </DataSharingContext.Consumer>
      
    );
  }
}

ProductList.contextType = DataSharingContext;

export default ProductList;