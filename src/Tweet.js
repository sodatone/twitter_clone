import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    return (
      <div className="tweet">
        {this.props.tweet.text}
      </div>   
    )
  }
}

export default Tweet;
