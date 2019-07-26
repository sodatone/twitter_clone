import React from "react";

export const Tweet = ({ tweet }) => (
  <div className="tweet">
    <div className="image-container">
      <img src={tweet.user.profile_image_url} />
    </div>
    <div className="tweet-info">
      <div className="user">
        <span className="name">{tweet.user.name}</span>
        <span className="screen-name">{tweet.user.screen_name}</span>
      </div>
      <p>{tweet.text}</p>
    </div>
  </div>
);
