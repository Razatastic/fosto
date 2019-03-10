import React, { Component } from "react";
import "../styles/App.css";
import "../styles/main.css";
import UserLoggedIn from "../components/auth/UserLoggedIn";
import UserLoggedOut from "../components/auth/UserLoggedOut";

class App extends Component {
  state = { user: false };

  render() {
    if (!this.state.user) {
      return <UserLoggedIn />;
    } else {
      return <UserLoggedOut />;
    }
  }
}

export default App;
