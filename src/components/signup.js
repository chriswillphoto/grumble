import React, { PureComponent as Component } from 'react'
import axios from 'axios'

class SignUp extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: "",
      password: "",
      passwordconfirmation: "",
      signupnotice: null
    }

    this.submitHandle = this.submitHandle.bind(this)
  }

  submitHandle(e){
    e.preventDefault()
    
  }

  render(){
    return(
      <div id="signup-form">
        <form onSubmit={(e) => {this.submitHandle(e)}}>
          <label>Email: </label>
          <input type="text" onChange={ (e) => {this.setState({email: e.target.value})} } value={this.state.email}/>
          <label>Password: </label>
          <input type="password" onChange={ (e) => {this.setState({password: e.target.value})} } value={this.state.password} />
          <label>Enter Password Again: </label>
          <input type="password" onChange={ (e) => {this.setState({passwordconfirmation: e.target.value})} } value={this.state.passwordconfirmation}/>
          <button>Sign Up!</button>
        </form>
      </div>
    )
  }
}

export default SignUp
