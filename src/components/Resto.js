import React, { PureComponent as Component} from 'react'
import axios from 'axios'

class Resto extends Component {
  constructor(props){
    super(props)

    this.clickHandler = this.clickHandler.bind(this)
    console.log(this.props)
  }

  clickHandler(e){
    this.props.clicky(e)
    // console.log(e)
  }

  render(){
    return(
      <div className="restobar" onClick={ () => {this.clickHandler(this.props.id)} }>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Resto
