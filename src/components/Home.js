import React, { PureComponent as Component } from 'react';
import Searchbar from './Searchbar';
import Restaurantviewer from './Restaurantviewer';


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
      </div>
    );
  }
}

export default Home;
