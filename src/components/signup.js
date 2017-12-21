import React, { PureComponent as Component } from 'react'

class SignUp extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      email: "",
      password: "",
      passwordconfirmation: "",
      signupnotice: null
    }

    this.submitHandle = this.submitHandle.bind(this)
  }

  submitHandle(e){
    e.preventDefault()
    this.props.signup(this.state)

  }

  render(){
    return(
      <div id="signup-form">
        <form onSubmit={(e) => {this.submitHandle(e)}}>
          <label>Name: </label>
          <input type="text" onChange={ (e) => {this.setState({name: e.target.value})} } value={this.state.name} />
          <label>Email: </label>
          <input type="text" onChange={ (e) => {this.setState({email: e.target.value})} } value={this.state.email}/>
          <label>Password: </label>
          <input type="password" onChange={ (e) => {this.setState({password: e.target.value})} } value={this.state.password} />
          <label>Enter Password Again: </label>
          <input type="password" onChange={ (e) => {this.setState({passwordconfirmation: e.target.value})} } value={this.state.passwordconfirmation}/>
          <button className="signup-button">Sign Up!</button>
        </form>
      </div>
    )
  }
}

export default SignUp
