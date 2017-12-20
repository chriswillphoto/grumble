// import React, { PureComponent as Component } from 'react';
// import axios from 'axios';
//
// class LikeButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       liked: false,
//       resty_id: this.props.match.params.restaurantId,
//
//
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState({
//       liked: !this.state.liked
//       likeClicks: this.state.likeClicks + 1
//     });
//   }
//
//   addLike(restaurant_id, user_id) {
//     axios.post("http://localhost:5000/restaurants/id/likes", { restaurant_id: restaurant_id, user_id: user_id}).then( results => { this.setState( { likeClicks: [results.data, ...this.state.likeClicks] })
//     });
//   }
//
//   render() {
//     const text = this.state.liked ? 'liked' : 'haven\'t liked';
//     const label = this.state.liked ? 'Unlike' : 'Like'
//
//     return (
//       <div className="customContainer">
//         <button className="btn btn-primary" onClick={this.handleClick}>{this.state.likeClicks}
//           {label}</button>
//       </div>
//     );
//   }
// }
//
// export default LikeButton;
