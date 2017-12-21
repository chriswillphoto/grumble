import React, { PureComponent as Component } from 'react';
import axios from 'axios';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      res_info: null,
      loggedIn: sessionStorage.getItem("token"),
      current_likes: null,
      current_user: null


    };
    this.handleClick = this.handleClick.bind(this);
    this.addLike = this.addLike.bind(this)
    this.unlike = this.unlike.bind(this)
    axios.get(`http://localhost:5000/restaurants/${this.props.res_id}`).then( res => {
      this.setState({res_info: res.data})

      axios.get("http://localhost:5000/likes", {headers: {Authorization: this.state.loggedIn}}).then(res => {
        this.setState({ current_likes: res.data });
        if(this.state.current_likes.indexOf(this.state.res_info.id) !== -1){
          this.setState({liked: true})
        }

      }) // nest axios .then

    }) // first get then

    axios.get("http://localhost:5000/profile", {headers: {Authorization: this.state.loggedIn}}).then(res => {
      this.setState({current_user: res.data[0]})
    })
  }

  handleClick() {
    if(this.state.liked){
      this.unlike(this.state.res_info.id)
    }else{
      this.addLike(this.state.res_info.id)
    }

    this.setState({
      liked: !this.state.liked
    });

  }

  addLike(restaurant_id) {
    axios.post(`http://localhost:5000/likes`, {restaurant_id: restaurant_id}, {headers: {Authorization: this.state.loggedIn}}).then( results => {
    });
  }

  unlike(restaurant_id){
    axios.delete(`http://localhost:5000/likes/${restaurant_id}/${this.state.current_user.id}`, {headers: {Authorization: this.state.loggedIn}}).then( results => {

    })


  }

  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    const label = this.state.liked ? 'Unlike' : 'Like'

    return (
      <div className="customContainer">
        <button className="btn btn-primary" onClick={() => this.handleClick() }>{label}</button>
      </div>
    );
  }
}

export default LikeButton;
