import React, { PureComponent as Component } from 'react';
import Searchbar from './Searchbar';
import Restaurantviewer from './Restaurantviewer';
import RestPopUp from './RestPopUp';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Restaurant from './Restaurant'


class Home extends Component {
  constructor () {
    super();
    this.state = {
      suburb: "",
      rests: [
      ],
      matched: null
    }

    this.qHandle = this.qHandle.bind(this)
    axios.get("http://localhost:5000/restaurants").then(res => {
      this.setState({rests: res.data})
    })

  };

  qHandle(e){
    // console.log(e)
    this.setState({suburb: e.suburb});
    const filtered = this.state.rests.filter(rest => rest.suburb === e.suburb.toLowerCase())
    this.setState({matched: filtered})
  }

  yes(e){
    if(e === "no") {
      const newmatched = this.state.matched.slice()
      newmatched.shift()
      if(newmatched.length === 0) {
        this.setState({matched: null})
        return
      }
      this.setState({matched: newmatched})
    }
    if(e === "yes") {
      const newmatched = this.state.matched.slice()
      const a = newmatched.shift()
      if(newmatched.length === 0) {
        this.setState({matched: null})
        return
      }
      this.setState({matched: newmatched})

      // TODO post request add restaurant using id to maybes
    }
    if(e === "faves") {
      const newmatched = this.state.matched.slice()
      const a = newmatched.shift()
      if(newmatched.length === 0) {
        this.setState({matched: null})
        return
      }
      this.setState({matched: newmatched})

      // TODO post request add restaurant using id to faves
    }
  }

  render() {
    return(
      <div>
        <h1 className="siteHeader">Grumble</h1>
        <Searchbar query={(state) => { this.qHandle(state) }}/>
        {this.state.matched ? <Restaurantviewer matched={this.state.matched[0]} button={(e) => {this.yes(e)} } /> : ""}
        <RestPopUp />
      </div>
    );
  }
}

export default Home;
