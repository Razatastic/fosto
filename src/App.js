import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/layout";
import { Home, Profile, NoMatch, Faq } from "./pages";
import { SignIn, SignUp } from "./components/auth";
import { Dashboard } from "./components/dashboard";

// This file houses the basic routing configuration for the application
const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      {/* Pages */}
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/faq" component={Faq} />
      {/* Dashboard */}
      <Route path="/dashboard" component={Dashboard} /> */}
      {/* Authentication */}
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      {/* 404 Page */}
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default App;
