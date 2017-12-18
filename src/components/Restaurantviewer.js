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
        <h1>{this.props.matched.name}</h1>
        <div>
          <button onClick = { (e) => {this.handleClick(e, "no")} }>No</button>
          <button onClick = { (e) => {this.handleClick(e, "fave")} }>Fave</button>
          <button onClick = { (e) => {this.handleClick(e, "yes")}  }>Yes</button>
        </div>
      </div>
    );
  }
}

export default Restaurantviewer;
// { matched ? <h1>{matched[0].name}</h1> : "" }
