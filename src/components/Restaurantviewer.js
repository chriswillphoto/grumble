import React, { PureComponent as Component } from 'react';

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
        <p className="suburbTag">{this.props.matched.suburb.toUpperCase()}</p>

        {this.props.popUp ?
          <div id="popUp">
            <p className="popUpItem">
            {this.props.matched.name}
            <br />
            {this.props.matched.price === 4 ?
              <span>
                <i className="fa fa-usd"></i>
                <i className="fa fa-usd"></i>
                <i className="fa fa-usd"></i>
                <i className="fa fa-usd"></i>
              </span>
              :
              "" }
            {this.props.matched.price === 3 ?
              <span>
                <i className="fa fa-usd"></i>
                <i className="fa fa-usd"></i>
                <i className="fa fa-usd"></i>
              </span>
              :
              "" }
              {this.props.matched.price === 2 ?
                <span>
                  <i className="fa fa-usd"></i>
                  <i className="fa fa-usd"></i>
                </span>
                :
                "" }
                {this.props.matched.price === 1 ?
                  <span>
                    <i className="fa fa-usd"></i>
                  </span>
                  :
                  "" }
            <br />
            {this.props.matched.address}
            <br />
            {this.props.matched.phone_number}
            <br />
            <br />
            {this.props.matched.description}
            </p>
          </div>
          :
          ""
        }

        <div></div>

          <div className={this.state.animate === "fave" && this.props.loggedIn ? "whatever heart" : "whatever" } ></div>

        </div>
        <button className="imageHeading" onClick = {this.handlePopUpClick}><i className="fa fa-expand fa-1x"></i> {this.props.matched.name}</button>
        <div className="tinderButtons">
          <button id="no" onClick = { (e) => {this.handleClick(e, "no")} }><i className="fa fa-times fa-5x"></i></button>
          <button id="fave" onClick = { (e) => {this.handleClick(e, "fave")} }><i className="fa fa-heart fa-4x"></i></button>
          <button id="yes" onClick = { (e) => {this.handleClick(e, "yes")}  }><i className="fa fa-check fa-5x"></i></button>




        </div>
      </div>
    );
  }
}

export default Restaurantviewer;
