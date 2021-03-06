import React, { PureComponent as Component } from 'react'

class Nav extends Component {
  constructor(props){
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout(){
    sessionStorage.removeItem("token")
    window.location.href = "https://chriswillphoto.github.io/restotinder_react/"
  }

  render(){
    return(
      <nav>
          <a id="navItem1" href="/restotinder_react/">G</a>
          {this.props.loggedIn ?
            <div className="navbuttons">
            <a id="navItem2" href="/restotinder_react/#/faves">See my list</a>
            <a id="navItem3" onClick={() => this.logout()}>Logout</a>
            </div>
            :
            <div className="navbuttons">
            <a id="navItem5" onClick={ () => this.props.show_signup() } >Sign Up </a>
            <a id="navItem4" onClick={ () => this.props.show_login() }>Login</a>
            </div>
          }

      </nav>
    )
  }

}

export default Nav
