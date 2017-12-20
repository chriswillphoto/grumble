import React, {Component} from 'react'

export default class Maps extends Component {
  constructor(props){
    super(props);

    this.state = {
      key: 'AIzaSyDkVkL8JnHgpriQQsczmEUstmwA8Kyjo6s'
    }

  }



  render(){
    return (
    <div>
    <iframe
      width="500"
      height="300"
     src={`https://www.google.com/maps/embed/v1/place?q=${this.props.address}&key=${this.state.key}`}>
     </iframe>
    </div>
    )
  }
}
