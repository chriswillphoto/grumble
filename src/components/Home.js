import React, { PureComponent as Component } from 'react';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import Restaurant from './Restaurant'

class Home extends Component {
  render() {
    return(
      <div>
        <h1>Grumble</h1>
        <Searchbar />
        // <Restaurant />
        <div>
        <h1><Link to="/">Home</Link> </h1>
        <p><Link to="/faves">User Page</Link></p>
        <p><Link to="/restaurant">Restaurant</Link></p>
        </div>
      </div>
    );
  }
}

export default Home;
