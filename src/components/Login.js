import React, {PureComponent as Component} from 'react'

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: "",
      password: ""
    }

    this.submitHandle = this.submitHandle.bind(this)
  }

  submitHandle(e){
    e.preventDefault()
    this.props.loginform(this.state)
  }

  render(){
    return(
    <div className="login-form">
        <form onSubmit={(event) => {this.submitHandle(event)} }>
          <label>Email: </label>
          <input id="email" type="text" onChange={ (event) => {this.setState({email: event.target.value})} } value={this.state.email} ></input>
          <label>Password: </label>
          <input type="password" onChange={ (event) => {this.setState({password: event.target.value})} } value={this.state.password}></input>
          <button id="login-button">Login</button>
        </form>
    </div>
    )
  }
}

export default Login
