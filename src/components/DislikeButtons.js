import React, { PureComponent as Component } from 'react';
import axios from 'axios';

class DislikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disliked: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      disliked: !this.state.disliked
    });
  }

  render() {
    const text = this.state.disliked ? 'disliked' : 'haven\'t disliked';
    const label = this.state.disliked ? 'Dislike' : 'Un-dislike'
    return (
      <div className="customContainer">
        <button className="btn btn-primary" onClick={this.handleClick}>
          {label}</button>

      </div>
    );
  }
}

export default DislikeButton;
