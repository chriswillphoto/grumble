import React, { PureComponent as Component } from 'react';

import axios from 'axios';

class Categories extends Component {


  render() {
    return (
      <div>
      <h1>categories filter menu</h1>
      {this.props.menu}.map (c) => <p key= {p.id}>
      {p}
      </div>
    );
  }
}

export default Categories;
