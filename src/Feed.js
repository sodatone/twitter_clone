import React, { Component } from 'react';
import Tweet from "./Tweet"
import tweets from "./tweets.json"
import "./Feed.css"


class Feed extends Component {
  constructor(props) {
    super(props)
    this.tweets = tweets.concat(tweets).concat(tweets)
  }

  render() {
    return (
      <div className="feed-outer-wrapper">
        <div className="feed-inner-wrapper">
          {
            this.tweets.map((tweet) => {
              return (
                <Tweet tweet={tweet} /> 
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Feed;
