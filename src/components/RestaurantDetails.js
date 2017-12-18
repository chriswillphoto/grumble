import React, { PureComponent as Component } from 'react';


class RestaurantDetails extends Component {
  constructor( props ) {
    super( props );
    console.log( this.props );
  }

  render() {
    return (
      <h2>{ this.props.match.params.restaurantId }</h2>
    )
  }
}

export default RestaurantDetails;
