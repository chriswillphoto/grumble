import React, { PureComponent as Component } from 'react';

import axios from 'axios';

class RestPopUp extends Component {

  render () {
    return (
      <div id="popUp">
        <p className="popUpItem">
        {this.props.rest.name}
        <br />
        {this.props.rest.price}
        <br />
        {this.props.rest.address}
        <br />
        {this.props.rest.phone_number}
        <br />
        {this.props.rest.description}
        </p>
      </div>
    );
  }
}

export default RestPopUp;
