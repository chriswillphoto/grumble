import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/restaurants/';

class Restaurant extends Component {
  constructor(props) {
    super(props)
    let match = this.props.match;

    this.state = {
      res_info: {},
      resto_id: match.params.restaurantId
     };

     // this.setState({resto_id: match.params.restaurantId})

    axios.get( SERVER_URL + this.state.resto_id ).then( results => {
      this.setState({res_info: results.data})
      console.log(results.data)
    });
  }

// , restaurantId: match.params.restaurantId

// createRestaurant( name, address, suburb, price, opening_hours, image ) {
//   axios.post(SERVER_URL, { name: name, address: address, suburb: suburb, price: price, opening_hours: opening_hours, image: image }).then(results =>
//   {
//     this.setState({ restaurants: [results.data,
//     ...this.state.restaurants] })
//   });
// }

  render() {
    return(
      <div>
        <h1>Restaurant Name</h1>
        <p>{this.state.res_info.name}</p>
        <h3>Descript</h3>
        <p>{this.state.res_info.description}</p>

      </div>
    );
  }
}

export default Restaurant;
