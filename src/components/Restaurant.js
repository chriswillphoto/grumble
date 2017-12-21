import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import Map from './MapEmbed';
import axios from 'axios'

import Nav from './Nav'
import LikeButton from './LikeButtons'


const SERVER_URL = 'http://localhost:5000/restaurants/';

class Restaurant extends Component {
  constructor(props) {
    super(props)
    let match = this.props.match;

    this.state = {
      res_info: {},
      resto_id: match.params.restaurantId,
      address: null,
      loggedIn: sessionStorage.getItem('token')
     };

    axios.get( SERVER_URL + this.state.resto_id ).then( results => {
      this.setState({res_info: results.data})
      this.setState({address: this.state.res_info.address})
      this.setState( {address: this.state.address.split(/[\s,]+/).join("%20") } )
      console.log(this.state)
    });
  }

  render() {

    return(
      <div>
      <Nav loggedIn={this.state.loggedIn}/>
      <div>
        <Map address={this.state.address}/>
      </div>
        <h1>{this.state.res_info.name}</h1>
        <br />
        <h3>Address</h3>
        <p>{this.state.res_info.address}</p>
        <br />
        <h3>Price Range</h3>
        {this.state.res_info.price === 4 ?
          <span>
            <i className="fa fa-usd"></i>
            <i className="fa fa-usd"></i>
            <i className="fa fa-usd"></i>
            <i className="fa fa-usd"></i>
          </span>
          :
          "" }
        {this.state.res_info.price === 3 ?
          <span>
            <i className="fa fa-usd"></i>
            <i className="fa fa-usd"></i>
            <i className="fa fa-usd"></i>
          </span>
          :
          "" }
          {this.state.res_info.price === 2 ?
            <span>
              <i className="fa fa-usd"></i>
              <i className="fa fa-usd"></i>
            </span>
            :
            "" }
            {this.state.res_info.price === 1 ?
              <span>
                <i className="fa fa-usd"></i>
              </span>
              :
              "" }
              <br />
              <br />
        <h3>Opening Hours</h3>
        <p>{this.state.res_info.opening_hours}</p>
        <br />
        <h3>Description</h3>
        <p>{this.state.res_info.description}</p>
        <img src= {this.state.res_info.image} alt={this.state.res_info.name}/>

        <LikeButton res_info={this.state.res_info}/>
      </div>
    );
  }
}

  export default Restaurant;
