import React, { PureComponent as Component } from 'react';
import axios from 'axios';

class DislikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disliked: false,
      res_info: null,
      loggedIn: sessionStorage.getItem("token"),
      current_dislikes: null,
      current_user: null

    };

    this.handleClick = this.handleClick.bind(this);
    this.addDislike = this.addDislike.bind(this);
    this.unDislike = this.unDislike.bind(this);

    axios.get(`https://grumblefood.herokuapp.com/restaurants/${this.props.res_id}`).then( res => {
      this.setState({res_info: res.data})

      axios.get("https://grumblefood.herokuapp.com/dislikes", {headers: {Authorization: this.state.loggedIn}}).then(res => {
        this.setState({ current_dislikes: res.data });
        if(this.state.current_dislikes.indexOf(this.state.res_info.id) !== -1){
          this.setState({disliked: true})
        }

      }) // nest axios .then

    })

    axios.get("https://grumblefood.herokuapp.com/profile", {headers: {Authorization: this.state.loggedIn}}).then(res => {
      this.setState({current_user: res.data[0]})
    })
  }

  handleClick() {
    if(this.state.disliked){
      this.unDislike(this.state.res_info.id)
      this.props.click("down")
    }else{
      this.addDislike(this.state.res_info.id)
      this.props.click("up")
    }

    this.setState({
      disliked: !this.state.disliked
    });
  }

  addDislike(restaurant_id) {
    axios.post(`https://grumblefood.herokuapp.com/dislikes`, {restaurant_id: restaurant_id}, {headers: {Authorization: this.state.loggedIn}}).then( results => {
    });
  }

  unDislike(restaurant_id) {
    axios.delete(`https://grumblefood.herokuapp.com/dislikes/${restaurant_id}/${this.state.current_user.id}`, {headers: {Authorization: this.state.loggedIn}})

  }
  render() {
    const label = this.state.disliked ? 'UN-DISLIKE' : 'Dislike'
    return (
      <div className="customContainer">
        <button className="btn btn-primary" onClick={() => this.handleClick() }>
          {label}</button>

      </div>
    );
  }
}

export default DislikeButton;
