import React, { PureComponent as Component } from 'react';
import Searchbar from './Searchbar';
<<<<<<< HEAD
import Restaurantviewer from './Restaurantviewer';

=======
import { Link } from 'react-router-dom';
>>>>>>> 4bba471bd6462d790aad5ed3d109909f8e175ada

class Home extends Component {
  constructor () {
    super();
    this.state = {
      suburb: "",
      rests: [
        {id: 1, suburb: "bondi", name: "whatever"}, {id: 2, suburb: "bondi", name: "test"}, {id: 3, suburb: "chatswood", name: "dno man"}
      ],
      matched: []
    }

    this.qHandle = this.qHandle.bind(this)
  };

  qHandle(e){
    // console.log(e)
    this.setState({suburb: e.suburb});
    const filtered = this.state.rests.filter(rest => rest.suburb === e.suburb)
    this.setState({matched: filtered})
  }

  render() {
    return(
      <div>
        <h1>Grumble</h1>
        <Searchbar query={(state) => { this.qHandle(state) }}/>
        {this.state.suburb ? <Restaurantviewer matched={this.state.matched[0]}/> : "" }
        <div>
        <h1><Link to="/">Home</Link> </h1>
        <p><Link to="/faves">User Page</Link></p>
      </div>
      </div>
    );
  }
}

export default Home;
