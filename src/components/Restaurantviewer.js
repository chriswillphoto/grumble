import React, { PureComponent as Component } from 'react';

class Restaurantviewer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      matched: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, f){
    this.props.button(f)
  }

  render () {
    return (
      <div>
        <a className="imageHeading" href="#">{this.props.matched.name}</a>
        <div className="headerBox"></div>
        <img className="imageSlider" src={this.props.matched.image} />
        <div className="tinderButtons">
          <button id="no" onClick = { (e) => {this.handleClick(e, "no")} }>No</button>
          <button id="fave" onClick = { (e) => {this.handleClick(e, "fave")} }>Fave</button>
          <button id="yes" onClick = { (e) => {this.handleClick(e, "yes")}  }>Yes</button>
        </div>
      </div>
    );
  }
}

export default Restaurantviewer;
// { matched ? <h1>{matched[0].name}</h1> : "" }
