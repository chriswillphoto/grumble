import React, { PureComponent as Component } from 'react';
import LikeButton from './LikeButtons'
import DislikeButton from './DislikeButtons'

class Restaurantviewer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      matched: [],
      moreInfo: false,
      animate: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePopUpClick = this.handlePopUpClick.bind(this);
  }

  handleClick(e, f){


    this.setState({animate: `${f}`})
    // this.props.button(f)
    if(f === "fave"){
      setTimeout( () => {this.setState({animate:false});this.props.button(f)}, 1300 )
      console.log("yes")
      return
    }
    setTimeout( () => {this.setState({animate:false});this.props.button(f)}, 300 )
  }

  handlePopUpClick(){
    this.props.show()
  }

  render () {
    return (
      <div>
        <div className={this.state.animate && this.props.loggedIn ? "imageSlider " + this.state.animate : "imageSlider"} style={ {backgroundImage: `url(${this.props.matched.image})`} } >
          <div className={this.state.animate === "fave" && this.props.loggedIn ? "whatever heart" : "whatever" } ></div>
        </div>
        <button className="imageHeading" onClick = {this.handlePopUpClick}><i className="fa fa-info fa-1x"></i> {this.props.matched.name}</button>
        <div className="tinderButtons">
          <button id="no" onClick = { (e) => {this.handleClick(e, "no")} }><i className="fa fa-times fa-5x"></i></button>
          <button id="fave" onClick = { (e) => {this.handleClick(e, "fave")} }><i className="fa fa-heart fa-4x"></i></button>
          <button id="yes" onClick = { (e) => {this.handleClick(e, "yes")}  }><i className="fa fa-check fa-5x"></i></button>
          <LikeButton/>
          <DislikeButton />
        </div>
      </div>
    );
  }
}

export default Restaurantviewer;
