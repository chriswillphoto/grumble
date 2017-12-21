import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import Map from './MapEmbed';
import axios from 'axios'

import Nav from './Nav'
import LikeButton from './LikeButtons'


const SERVER_URL = 'http://grumblefood.herokuapp.com/restaurants/';

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
        <h1 className="restaurantHeading">{this.state.res_info.name}</h1>
        <br />
        <div className="subInfoContainer">
          <h3 className="infoItems">Address</h3>
          <p>{this.state.res_info.address}</p>
          <br />
          <h3 className="infoItems">Opening Hours</h3>
          <p>{this.state.res_info.opening_hours}</p>
        <br />
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
          <div>
            <Map address={this.state.address}/>
          </div>
        </div>
        <br />
          <p className="descriptionText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, <br /> <br />and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className="descriptionHeading">{this.state.res_info.description}</p>
        <img className="images" src= {this.state.res_info.image} alt={this.state.res_info.name}/>

        <LikeButton res_id={this.props.match.params.restaurantId}/>

      </div>
    );
  }
}

  export default Restaurant;
