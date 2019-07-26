import React from "react";
import { Nav } from "./Nav";
import { Feed } from "./Feed";

export const Layout = ({ tweets }) => (
  <div>
    <Nav />
    <div className="feed-container">
      <Feed tweets={tweets} />
    </div>
  </div>
);
