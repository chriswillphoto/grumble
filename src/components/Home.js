import React, { PureComponent as Component } from 'react';
import Searchbar from './Searchbar';
import Categories from './Categories';
import Restaurantviewer from './Restaurantviewer';
import Login from './Login';
import RestPopUp from './RestPopUp';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Restaurant from './Restaurant';



class Home extends Component {
  constructor () {
    super();
    this.state = {
      suburb: "",
      rests: [],
      matched: null,
      popUp: false,
      loggedIn: false,
      filterMenu: []
    }

    this.qHandle = this.qHandle.bind(this)
    this.popUpHandle = this.popUpHandle.bind(this)

    axios.get("http://localhost:5000/restaurants").then(res => {
      this.setState({rests: res.data})
    axios.get("http://localhost:5000/categories").then(res => {
      console.log(res.data);
      this.setState({filterMenu: res.data.name})
    })
    })

  };


  qHandle(e){
    // console.log(e)
    this.setState({suburb: e.suburb});

    const filtered = this.state.rests.filter(rest => rest.suburb.indexOf(e.suburb.toLowerCase()) !== -1 )

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


  }

  yes(e){
    if(e === "no") {
      const newmatched = this.state.matched.slice()
      newmatched.shift()
      if(newmatched.length === 0) {
        this.setState({matched: null})
        return
      }
      this.setState({matched: newmatched})
    }
    if(e === "yes") {
      const newmatched = this.state.matched.slice()
      const a = newmatched.shift()
      if(newmatched.length === 0) {
        this.setState({matched: null})
        return
      }
      this.setState({matched: newmatched})

    }
    if(e === "faves") {
      const newmatched = this.state.matched.slice()
      const a = newmatched.shift()
      if(newmatched.length === 0) {
        this.setState({matched: null})
        return
      }
      this.setState({matched: newmatched})

    }
  }

  popUpHandle(){
    const newState = !this.state.popUp
    this.setState({popUp: newState})
  }

  render() {
    return(
      <div>
        <Login loginform={(i) => this.loginHandler(i)}/>
        <h1 className="siteHeader">Grumble</h1>
        <Searchbar query={(state) => { this.qHandle(state) }}
        {this.state.matched ? <Restaurantviewer show={() => this.popUpHandle()} matched={this.state.matched[0]} button={(e) => {this.yes(e)} } /> : "Please Enter A Sydney Suburb"}
        {this.state.popUp && this.state.matched ? <RestPopUp rest={this.state.matched[0]}/> : ""}
        <Categories {this.state.filterMenu} />
      </div>
    );
  }
}

export default Home;

// {this.state.menu ? <Categories filterMenu /> : ""}
