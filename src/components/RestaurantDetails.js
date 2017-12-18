import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class RestaurantDetails extends Component {
  constructor( props ) {
    super( props );
    console.log( this.props );
  }

  render() {
    return (
      <div>
      <h1>Restaurant Name</h1>

      </div>
    )
  }
}

export default RestaurantDetails;
