import React, { PureComponent as Component } from 'react'
import axios from 'axios'

import Resto from './Resto'

class Faves extends Component {
  constructor(props){
    super(props)

    this.state = {
      maybes: [
        {id: 1, name: "Banana"}, {id: 2, name: "Apple"}
      ],
      faves: [
        {id: 3, name: "Pear"}
      ]
    }
    this.makeMaybes = this.makeMaybes.bind(this)
  }

  makeMaybes(){
    this.state.maybes.map( (m) => {
      return <Resto key={m.id} id={m.id} name={m.name} />
    } )
  }

  clickhandle(e) {
    // const old = this.state.maybes.slice()
    console.log(e)
  }

  render(){
    return(
      <div>

        <div className="maybes">
          {this.state.maybes.map( (m) => {
            return <Resto key={m.id} id={m.id} name={m.name} clicky={(e) => {this.clickhandle(e)} }/>
          } )}
        </div>

        <div className="faves">
          {this.state.faves.map( (f) => {
            return <Resto key={f.id} name={f.name} />
          } )}
        </div>

      </div>
    )
  }

} // class


export default Faves
