import React, { PureComponent as Component} from 'react'
import axios from 'axios'

class Resto extends Component {
  constructor(props){
    super(props)

    this.clickHandler = this.clickHandler.bind(this)
    // console.log(this.props)
  }

  clickHandler(e){
    this.props.clicky(e)
    // console.log(e)
  }

  render(){
    return(
      <div className="restobar" >
        <p>{this.props.name}</p>
        {this.props.iconClass ?
          <div className="buttonwrap">
          <button><i className="fa fa-trash-o fa-2x" /></button>
          <button onClick={ () => {this.clickHandler(this.props.id)} }><i className="fa fa-heart-o fa-2x"/></button></div>
           : ""}
      </div>
    )
  }
}

export default Resto
