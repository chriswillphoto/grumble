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

    axios.get( SERVER_URL + this.state.resto_id ).then( results => {
      this.setState({res_info: results.data})
      console.log(results.data)
    });
  }

  render() {
    return(
      <div>
        <h1>{this.state.res_info.name}</h1>
        <h3>Address</h3>
        <p>{this.state.res_info.address}</p>
        <h3>Price Range</h3>
        <p>{this.state.res_info.price}</p>
        <h3>Opening Hours</h3>
        <p>{this.state.res_info.opening_hours}</p>
        <h3>Description</h3>
        <p>{this.state.res_info.description}</p>
        <img src= {this.state.res_info.image} />
      </div>
    );
  }
}

  export default Restaurant;
