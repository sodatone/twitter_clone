import React, { Component } from "react";
import "./App.css";
import tweets from "./tweets.json";
import { Layout } from "./Layout";

class App extends Component {
  render() {
    return <Layout tweets={tweets} />;
  }
}

export default App;
