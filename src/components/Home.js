import React, { PureComponent as Component } from 'react';
import Searchbar from './Searchbar';
import Categories from './Categories';
import Restaurantviewer from './Restaurantviewer';
import Login from './Login';
import SignUp from './signup'
// import { Link } from 'react-router-dom';

import axios from 'axios';
import Nav from './Nav';



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
      user_maybes: null,
      show_login: false,
      show_signup: false,
      login_error: null,
      filterMenu: [],
      foodType: ""

    }

    this.qHandle = this.qHandle.bind(this)
    this.popUpHandle = this.popUpHandle.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    this.show_signup = this.show_signup.bind(this)

    axios.all([
      axios.get("https://grumblefood.herokuapp.com/restaurants"),
      axios.get("https://grumblefood.herokuapp.com/categories")
    ]).then(axios.spread( (restRes, catRes) => {
      this.setState({rests: restRes.data, filterMenu: catRes.data})
    } ))
    // .then(res => {
    //   this.setState({rests: res.data})
    // })
    //
    // .then(res => {
    //   this.setState({filterMenu: res.data})
    // })

    if(this.state.loggedIn){
      axios.get("https://grumblefood.herokuapp.com/profile", {headers: {Authorization: this.state.loggedIn}}).then(res => {
        this.setState({current_user: res.data[0], user_faves: res.data[1], user_maybes: res.data[2] })
      })

    }

  };


  qHandle(e){

    this.setState({suburb: e.suburb});
    let filtered;
    if(this.state.foodType !== ""){
      filtered = this.state.rests.filter( rest => { return rest.categories[0].name.indexOf(e) !== -1 && rest.suburb.indexOf(this.state.suburb.toLowerCase()) !== -1 } )
    }else{
      filtered = this.state.rests.filter( rest => { return rest.suburb.indexOf(e.suburb.toLowerCase()) !== -1 } )
    };

    if(filtered.length === 0){
      this.setState({matched: null, foodType: ""})
      alert("There are no more restaurants listed for this suburb, sorry")
    }else{
      this.setState({matched: filtered})
    }
  }


  loginHandler(details){
    const send = {email: details.email, password: details.password}
    axios.post("https://grumblefood.herokuapp.com/login", send).then(res => {
      console.log(res)
      sessionStorage.setItem("token", res.data.auth_token)
      this.setState({loggedIn: true, login_error: null, show_login: false})

      window.location.reload()

    }).catch( (error) => {
      this.setState({login_error: "Failed Login"})
    })

  }

  show_login(){
    if(this.state.show_login){
      this.setState({show_login: false})
    }else{
      this.setState({show_login: true})
    }
  }

  show_signup(){
    this.setState({show_signup: !this.state.show_signup})
  }

  yes(f){


    if(f === "no") {
      const newmatched = this.state.matched.slice()
      newmatched.shift()
      if(newmatched.length === 0) {
        this.setState({matched: null, foodType: ""})
        alert("There are no more restaurants under this Suburb")
        return
      }
      this.setState({matched: newmatched})
    }

    if(f === "yes") {
      if(!this.state.loggedIn){
        this.setState({show_login: true})
        window.scrollTo(0,0)
        return
      }
      const newmatched = this.state.matched.slice()
      const a = newmatched.shift()
      if(newmatched.length === 0) {
        this.setState({matched: null, foodType: ""})
        alert("There are no more restaurants under this Suburb")
        return
      }else{
        this.setState({matched: newmatched})
      }


      if(this.state.user_maybes.indexOf(a.id) === -1 && this.state.user_faves.indexOf(a.id) === -1 ) {
        axios.put(`https://grumblefood.herokuapp.com/restaurants/${a.id}/maybe`, a, {headers: {Authorization: this.state.loggedIn}}).then( res => {
        })
      }else{
        alert("Restaurant has already been added to your profile")
      }


    }

    if(f === "fave") {
      if(!this.state.loggedIn){
        this.setState({show_login: true})
        window.scrollTo(0,0)
        return
      }
      const newmatched = this.state.matched.slice()
      const a = newmatched.shift()
      if(newmatched.length === 0) {
        this.setState({matched: null, foodType: ""})
        alert("There are no more restaurants under this Suburb")
      }else{
        this.setState({matched: newmatched})
      }


      if(this.state.user_faves.indexOf(a.id) === -1 && this.state.user_maybes.indexOf(a.id)) {
        axios.put(`https://grumblefood.herokuapp.com/restaurants/${a.id}/fave`, a, {headers: {Authorization: this.state.loggedIn}}).then( res => {
        })
      }else{
        alert("Restaurant has already been added to your profile")
      }


    }
  }

  // sets the flag for the pop up restaurant information bar
  popUpHandle(){
    const newState = !this.state.popUp
    this.setState({popUp: newState})
  }

  // function further filters results under cuisine type

  foodTypeHandle(e){
    this.setState({foodType: e})

    const filtered2 = this.state.rests.filter( rest => { return rest.categories[0].name.indexOf(e) !== -1 && rest.suburb.indexOf(this.state.suburb.toLowerCase()) !== -1 } )


    if(filtered2.length === 0){
      this.setState({matched: null, foodType: ""})
      alert('There are no more restaurants under this food type')
    }else{
      this.setState({matched: filtered2})
    }
  }

  // function that handles the creation of a user

  submitHandler(e){
    console.log(e)
    if(e.password === e.passwordconfirmation){
      axios.post("https://grumblefood.herokuapp.com/users", { user: {name: e.name, email: e.email, password: e.password, password_confirmation: e.passwordconfirmation}}).then( res => {
        this.setState({login_error: "Sign up successful, please log in", show_signup: null})
      })
    }else{
      this.setState({login_error: "Passwords don't match"})
    }
  }


  render() {
    return(
      <div>
        <div id="map"></div>
        <Nav show_login={ () => this.show_login() } loggedIn={this.state.loggedIn} show_signup={ () => this.show_signup() }/>
        {this.state.login_error && <h1>{this.state.login_error}</h1>}
        {this.state.show_login && <Login loginform={(i) => this.loginHandler(i)}/> }
        {this.state.show_signup && <SignUp signup={(e) => this.submitHandler(e)}/> }
        <h1 className="siteHeader left">Grumble</h1>
        <Searchbar query={(state) => { this.qHandle(state) }}/>
        {this.state.filterMenu && this.state.matched ? <Categories menu={ this.state.filterMenu } foodType={(e) => this.foodTypeHandle(e)} /> : ""}
        {this.state.matched ? <Restaurantviewer popUp={this.state.popUp}loggedIn={ this.state.loggedIn } show={() => this.popUpHandle()} matched={this.state.matched[0]} button={(e) => {this.yes(e)} } /> : "Please Enter A Sydney Suburb"}




      </div>

    );
  }
}

export default Home;
