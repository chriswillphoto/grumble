import React, { PureComponent as Component } from 'react'
import axios from 'axios'

import Resto from './Resto'
import Nav from './Nav'

class Faves extends Component {
  constructor(props){
    super(props)

    this.state = {
      current_user: null,
      maybes: null,
      faves: null,
      loggedIn: sessionStorage.getItem("token")
    }


    if(this.state.loggedIn){
      axios.get("http://localhost:5000/profile", {headers: {Authorization: this.state.loggedIn}}).then(res => {
        this.setState({current_user: res.data[0], faves: res.data[3], maybes: res.data[4] })
        console.log(this.state)
      } )
  }
}



  faveHandle(e) {
    const oldm = this.state.maybes.slice()
    const oldf = this.state.faves.slice()
    const objToMove = oldm.find(m => m.id === e)
    const index = oldm.indexOf( objToMove )
    oldf.push(objToMove)
    const a = oldm.splice(index, 1)

    this.setState({maybes: oldm, faves: oldf})
    axios.put("http://localhost:5000/maybes", {restaurant_id: a[0].id}, {headers: {Authorization: this.state.loggedIn}}).then(res => { console.log(res) })
    axios.put("http://localhost:5000/favourites", {restaurant_id: a[0].id}, {headers: {Authorization: this.state.loggedIn}}).then(res => { console.log(res) })

  }

  trashMaybe(e){
    const maybs = this.state.maybes.slice()
    const obj = maybs.find(m => m.id === e)
    const index = maybs.indexOf( obj )
    const a = maybs.splice(index, 1)
    this.setState({maybes: maybs})
    axios.put("http://localhost:5000/maybes", {restaurant_id: a[0].id}, {headers: {Authorization: this.state.loggedIn}}).then(res => { console.log(res) })
  }

  trashFave(e){
    const faves = this.state.faves.slice()
    const obj = faves.find(f => f.id === e)
    const index = faves.indexOf( obj )
    const a = faves.splice(index, 1)
    console.log(a)
    this.setState({faves})
    axios.put("http://localhost:5000/favourites", {restaurant_id: a[0].id}, {headers: {Authorization: this.state.loggedIn}}).then(res => { console.log(res) })
  }

  render(){
    return(
      <div>
        <Nav loggedIn={this.state.loggedIn}/>
        <h1 className="profileHeading">Hello, { this.state.current_user ? this.state.current_user.name : "Current User" }</h1>
        <h2 className="profileSubHeading"><span id="worksHeading">How it works.</span> Trash the losers. Heart the faves. Click on the winners for location details.</h2>
        <div className="maybes">
          <h3 className="listHeading">My Shortlist</h3>
          {this.state.maybes ? this.state.maybes.map( (m) => {
            return <Resto key={m.id} id={m.id} name={m.name} favey={(e) => {this.faveHandle(e)} } trashy={(e) => { if(window.confirm("Remove from your matches?")) {this.trashMaybe(e)} }} iconClass={"maybe"} />
          } ) : ""}
        </div>

        <div className="faves">
          <h3 className="listHeading">All Time Faves</h3>
          {this.state.faves ? this.state.faves.map( (f) => {
            return <Resto key={f.id} id={f.id} name={f.name} trashy={(e) => { if(window.confirm("Remove from Favourites?")){this.trashFave(e)} }}/>
          } ) : ""}
        </div>

        <div className="processMap">
          <i className="fa fa-smile-o fa-5x" id="icon1"></i>
          <i className="fa fa-pie-chart fa-5x" id="icon2"></i>
          <i className="fa fa-cutlery fa-5x" id="icon3"></i>
        </div>
        <div>
          <p className="iconText">1. Here lies your top choices</p>
          <p className="iconText">2. Analyse the options</p>
          <p className="iconText">3. Go eat* Food awaits</p>
        </div>
        <p className="fineprint">*Wow youre really organised Susan! (theyll say). <br />Wait your names not Susan, but organised folk have names like Susan so we suggest you go with it.</p>
      </div>
    )
  }

} // class


export default Faves
