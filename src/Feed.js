import React from "react";
import { Tweet } from "./Tweet";

export const Feed = ({ tweets }) => (
  <div className="feed">
    {tweets.map(tweet => (
      <Tweet key={tweet.id} tweet={tweet} />
    ))}
  </div>
);
