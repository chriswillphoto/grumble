import React, { PureComponent as Component }
from 'react';


class Searchbar extends Component {
  constructor () {
    super();
    this.state = {
      suburb: ""
    }

    this._handleChangeFor = this._handleChangeFor.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

  };


  _handleChangeFor(e) {

    this.setState( { suburb: e.target.value } );
  }

  _handleSubmit(e) {
    e.preventDefault();

      this.props.query(this.state)

  }

  render() {
    return(
      <div>
        <form onSubmit = { this._handleSubmit }>
          <label className="locationLabel">Enter a location:</label>
          <input className="searchBar" type="text" placeholder="Eg. Surry Hills" onChange={(event) => this._handleChangeFor(event)} value={this.state.suburb}/>
          <button className="goButton">SEARCH</button>
        </form>
      </div>
    )
  }
}

export default Searchbar;
