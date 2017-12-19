import React, { PureComponent as Component } from 'react';
import Searchbar from './Searchbar';
import Restaurantviewer from './Restaurantviewer';
import Login from './Login'
import RestPopUp from './RestPopUp';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Restaurant from './Restaurant'
import Nav from './Nav'


class Home extends Component {
  constructor () {
    super();
    this.state = {
      suburb: "",
      rests: [],
      matched: null,
      popUp: false,
      loggedIn: sessionStorage.getItem('token'),
      current_user: null,
      user_faves: null,
      user_maybes: null

    }

    this.qHandle = this.qHandle.bind(this)
    this.popUpHandle = this.popUpHandle.bind(this)
    this.logout = this.logout.bind(this)

    axios.get("http://localhost:5000/restaurants").then(res => {
      this.setState({rests: res.data})
    })

    if(this.state.loggedIn){
      axios.get("http://localhost:5000/profile", {headers: {Authorization: this.state.loggedIn}}).then(res => {
        this.setState({current_user: res.data[0], user_faves: res.data[1], user_maybes: res.data[2] })
      })

    }

  };

  qHandle(e){
    // console.log(e)
    this.setState({suburb: e.suburb});
    const filtered = this.state.rests.filter(rest => rest.suburb.indexOf(e.suburb) !== -1 )
    if(filtered.length === 0){
      this.setState({matched: null})
    }else{
      this.setState({matched: filtered})
    }
  }

  loginHandler(details){
    const send = {email: details.email, password: details.password}
    axios.post("http://localhost:5000/login", send).then(res => {
      sessionStorage.setItem("token", res.data.auth_token)
    })

    this.setState({loggedIn: true})

    window.location.reload()

  }

  yes(f){
    if(f === "no") {
      const newmatched = this.state.matched.slice()
      newmatched.shift()
      if(newmatched.length === 0) {
        this.setState({matched: null})
        return
      }
      this.setState({matched: newmatched})
    }
    if(f === "yes") {
      const newmatched = this.state.matched.slice()
      const a = newmatched.shift()
      if(newmatched.length === 0) {
        this.setState({matched: null})
        return
      }
      this.setState({matched: newmatched})

      axios.put(`http://localhost:5000/restaurants/${a.id}/maybe`, a, {headers: {Authorization: this.state.loggedIn}}).then( res => {
        console.log(res)
      })
      // TODO post request add restaurant using id to maybes
    }
    if(f === "fave") {
      const newmatched = this.state.matched.slice()
      const a = newmatched.shift()
      if(newmatched.length === 0) {
        this.setState({matched: null})
        return
      }
      this.setState({matched: newmatched})

      axios.put(`http://localhost:5000/restaurants/${a.id}/fave`, a, {headers: {Authorization: this.state.loggedIn}}).then( res => {
        console.log(res)
      })

      // TODO post request add restaurant using id to faves
    }
  }

  popUpHandle(){
    const newState = !this.state.popUp
    this.setState({popUp: newState})
  }

  logout(){
    sessionStorage.removeItem("token")
    this.setState({loggedIn: false})
    window.location.reload()

  }

  render() {
    return(
      <div>
        <Nav loggedIn={this.state.loggedIn} logout={() => this.logout()}/>
        <Login loginform={(i) => this.loginHandler(i)}/>
        <h1 className="siteHeader">Grumble</h1>
        <Searchbar query={(state) => { this.qHandle(state) }}/>

        {this.state.matched ? <Restaurantviewer loggedIn={ this.state.loggedIn } show={() => this.popUpHandle()} matched={this.state.matched[0]} button={(e) => {this.yes(e)} } /> : "Please Enter A Sydney Suburb"}
        {this.state.popUp && this.state.matched ? <RestPopUp rest={this.state.matched[0]}/> : ""}

      </div>
    );
  }
}

export default Home;
