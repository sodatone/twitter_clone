import React, { Component } from 'react';
import Nav from "./Nav"
import ProfileInfo from "./ProfileInfo"
import "./Chrome.css"

export default class Chrome extends Component {
  render() {
    return (
      <div className="chrome-outer-wrapper">
        <div className="chrome-inner-wrapper">
          <Nav />
        </div>
      </div>
    )
  }
}
