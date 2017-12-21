import React, { PureComponent as Component } from 'react';
// import { Link } from 'react-router-dom';
import Map from './MapEmbed';
import axios from 'axios'

import Nav from './Nav'
import LikeButton from './LikeButtons'
import DislikeButton from './DislikeButtons'
import RatingBox from './ratingbox'



const SERVER_URL = 'http://localhost:5000/restaurants/';

class Restaurant extends Component {
  constructor(props) {
    super(props)
    let match = this.props.match;

    this.state = {
      res_info: {},
      resto_id: match.params.restaurantId,
      address: null,
      loggedIn: sessionStorage.getItem('token'),
      likes: 0,
      dislikes: 0
     };

     this.likeclicker = this.likeclicker.bind(this)
     this.dislikeclicker = this.dislikeclicker.bind(this)

    axios.get( SERVER_URL + this.state.resto_id ).then( results => {
      this.setState({res_info: results.data})
      this.setState({address: this.state.res_info.address})
      this.setState( {address: this.state.address.split(/[\s,]+/).join("%20") } )
      this.setState({likes: this.state.res_info.likes.length, dislikes: this.state.res_info.dislikes.length})
      console.log(this.state)
    });
  }

  likeclicker(updown){
    const i = this.state.likes
    updown === "up" ? this.setState({likes: i + 1}) : this.setState({likes: i - 1})
  }

  dislikeclicker(updown){
    const i = this.state.dislikes
    updown === "up" ? this.setState({dislikes: i + 1}) : this.setState({dislikes: i - 1})
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

        <div className="RateContainer">
          <RatingBox likes={this.state.likes} dislikes={this.state.dislikes} />
          <p className="RateHeading">RATE IT.</p>
          <LikeButton res_id={this.props.match.params.restaurantId} click={(i) => this.likeclicker(i)}/>
          <DislikeButton res_id={this.props.match.params.restaurantId} click={(i) => this.dislikeclicker(i)}/>
        </div>

      </div>
    );
  }
}

  export default Restaurant;
