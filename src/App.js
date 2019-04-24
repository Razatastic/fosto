import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import { Navbar } from "./components/layout";
// import { Home, Profile, NoMatch, Faq } from "./pages";
// import { SignIn, SignUp } from "./components/auth";
// import { Dashboard } from "./components/dashboard";

import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

// This file houses the basic routing configuration for the application
const App = () => (
  <BrowserRouter>
    <Layout>
      <Header className="header">{/* <Navbar /> */}</Header>
      <Content>
        <Switch>
          {/* Pages */}
          {/* <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/faq" component={Faq} /> */}
          {/* Dashboard */}
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          {/* Authentication */}
          {/* <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} /> */}
          {/* 404 Page */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Content>
      <Footer>
        <h1>Hello</h1>
      </Footer>
    </Layout>
  </BrowserRouter>
);

export default App;
