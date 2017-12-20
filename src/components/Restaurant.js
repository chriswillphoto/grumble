import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import Map from './MapEmbed';
import axios from 'axios'


const SERVER_URL = 'http://localhost:5000/restaurants/';



class Restaurant extends Component {
  constructor(props) {
    super(props)
    let match = this.props.match;

    this.state = {
      res_info: {},
      resto_id: match.params.restaurantId,
      address: null
     };

    axios.get( SERVER_URL + this.state.resto_id ).then( results => {
      this.setState({res_info: results.data})
      this.setState({address: this.state.res_info.address})
      this.setState( {address: this.state.address.split(/[\s,]+/).join("%20") } )
    });
  }

  render() {

    return(
      <div>
      <div>
        <Map address={this.state.address}/>
      </div>
        <h1>{this.state.res_info.name}</h1>
        <h3>Address</h3>
        <p>{this.state.res_info.address}</p>
        <h3>Price Range</h3>
        <p>{this.state.res_info.price}</p>
        <h3>Opening Hours</h3>
        <p>{this.state.res_info.opening_hours}</p>
        <h3>Description</h3>
        <p>{this.state.res_info.description}</p>
        <img src= {this.state.res_info.image} alt={this.state.res_info.name}/>

      </div>
    );
  }
}

  export default Restaurant;
