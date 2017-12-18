import React, { PureComponent as Component} from 'react'
import axios from 'axios'
import ConfirmLink from 'react-confirm-dialog'

class Resto extends Component {
  constructor(props){
    super(props)

    this.faveHandler = this.faveHandler.bind(this)
    this.trashHandler = this.trashHandler.bind(this)
    // console.log(this.props)
  }

  faveHandler(e){
    this.props.favey(e)
    // console.log(e)
  }

  trashHandler(e){
    this.props.trashy(e)
  }

  render(){
    return(
      <div className="restobar" >
        <p>{this.props.name}</p>
        {this.props.iconClass === "maybe" ?
          <div className="buttonwrap">
          <button onClick={ () => { this.trashHandler(this.props.id) } }><i className="fa fa-trash-o fa-2x" /></button>
          <button onClick={ () => {this.faveHandler(this.props.id)} }><i className="fa fa-heart-o fa-2x"/></button>
          </div>
           :
          <div className="buttonwrap">
          <button onClick={ () => { this.trashHandler(this.props.id) } }><i className="fa fa-trash-o fa-2x" /></button>
          </div>
         }
      </div>
    )
  }
}

export default Resto
