import React, { PureComponent as Component }
from 'react';

import axios from 'axios';


class Searchbar extends Component {
  constructor () {
    super();
    this.state = {
      suburb: "sydney",
      longitude: 0,
      latitude: 0
    }

    this._handleChangeFor = this._handleChangeFor.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

  };


  _handleChangeFor(e) {
    this.setState( { suburb: e.target.value } );
  }

  _handleSubmit(e) {
    e.preventDefault();
    let searchUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${this.state.suburb}&=AIzaSyDVesZNeF7rAKoUimZKySRNeGstAlNdsFg`

    axios.get(searchUrl).then( results => {
      this.setState({ longitude: results.data.results[0].geometry.location.lng,
      latitude: results.data.results[0].geometry.location.lat  })
      this.props.query(this.state)
    } );

  }

  render() {
    return(
      <div>
        <form onSubmit = { this._handleSubmit }>
          Enter Location: <input type="text" onChange={(event) => this._handleChangeFor(event)} value={this.state.suburb}/>
          <button>Go</button>
        </form>
      </div>
    )
  }
}

export default Searchbar;
