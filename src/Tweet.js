import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    const tweet = this.props.tweet

    return (
      <div className="tweet">
        <div className="picture-wrapper">
          <div
            className="profile-image"
            src={tweet.user.profile_image_url}>
          </div>
        </div>
        <div className="contents-wrapper">
          <div className="top-matter">
            <div className="profile-name">
              {tweet.user.name}
            </div>
            <div className="screen-name">
              @{tweet.user.screen_name}
            </div>
          </div>
          <div className="tweet-text">
            {tweet.text}
          </div>
        </div>
      </div>
    )
  }
}

export default Tweet;
