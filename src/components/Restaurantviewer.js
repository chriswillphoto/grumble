import React, { PureComponent as Component } from 'react';

class Restaurantviewer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      matched: []
    };

  }

  render () {
    return (
      <div>
        <h1>{this.props.matched.name}</h1>
        <div>
        </div>
      </div>
    );
  }
}

export default Restaurantviewer;
// { matched ? <h1>{matched[0].name}</h1> : "" }
