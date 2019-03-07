import React, { Component } from 'react';
import Chrome from './Chrome'
import Feed from './Feed'

class App extends Component {
  render() {
    return (
      <div>
        <Chrome />
        <Feed />
      </div>
    );
  }
}

export default App;
