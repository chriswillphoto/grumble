import React, { PureComponent as Component } from 'react';
import Searchbar from './Searchbar';


class Home extends Component {
  render() {
    return(
      <div>
        <h1>Grumble</h1>
        <Searchbar />
      </div>
    );
  }
}

export default Home;
