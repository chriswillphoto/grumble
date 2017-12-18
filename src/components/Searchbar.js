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
          <label class="locationLabel">Enter a location:</label>
          <input class="searchBar" type="text" placeholder="Eg. Surry Hills" onChange={(event) => this._handleChangeFor(event)} value={this.state.suburb}/>
          <button class="goButton">SEARCH</button>
        </form>
      </div>
    )
  }
}

export default Searchbar;
