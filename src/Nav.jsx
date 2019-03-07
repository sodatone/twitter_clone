import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  renderHomeTab() {
    return (
      <div className="nav-item active">
        Home
      </div>
    )
  }

  renderSearchTab() {
    return (
      <div className="nav-item">
        Search
      </div>
    )
  }

  renderNotificationsTab() {
    return (
      <div className="nav-item">
        Notifications
      </div>
    )
  }

  renderMailTab() {
    return (
      <div className="nav-item">
        Mail
      </div>
    )
  }

  render() {
    return (
      <div className="nav-items">
        {this.renderHomeTab()}
        {this.renderSearchTab()}
        {this.renderNotificationsTab()}
        {this.renderMailTab()}
      </div>
    )
  }
}
