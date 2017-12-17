import React, { PureComponent as Component } from 'react'
import axios from 'axios'

import Resto from './Resto'

class Faves extends Component {
  constructor(props){
    super(props)

    this.state = {
      maybes: [
        {id: 1, name: "Banana"}, {id: 2, name: "Apple"}, {id: 5, name: "Pineapple"}, {id: 4, name: "Peach"}
      ],
      faves: [
        {id: 3, name: "Pear"}
      ]
    }

  }



  faveHandle(e) {
    const oldm = this.state.maybes.slice()
    const oldf = this.state.faves.slice()
    const objToMove = oldm.find(m => m.id === e)
    const index = oldm.indexOf( objToMove )
    oldf.push(objToMove)
    oldm.splice(index, 1)
    this.setState({maybes: oldm, faves: oldf})
  }

  trashHandle(e){
    const maybs = this.state.maybes.slice()
    const obj = maybs.find(m => m.id === e)
    const index = maybs.indexOf( obj )
    maybs.splice(index, 1)
    this.setState({maybes: maybs})
  }

  render(){
    return(
      <div>

        <div className="maybes">
          <h3>Maybes</h3>
          {this.state.maybes.map( (m) => {
            return <Resto key={m.id} id={m.id} name={m.name} favey={(e) => {this.faveHandle(e)} } trashy={(e) => {this.trashHandle(e)}} iconClass={true} />
          } )}
        </div>

        <div className="faves">
          <h3>Faves</h3>
          {this.state.faves.map( (f) => {
            return <Resto key={f.id} id={f.id} name={f.name} />
          } )}
        </div>

      </div>
    )
  }

} // class


export default Faves
