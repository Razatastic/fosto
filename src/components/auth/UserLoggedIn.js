import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Login from "../../pages/auth/Login";
import Home from "../../pages/Home";
import FAQ from "../../pages/Faq";

export default function UserLoggedIn() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/faq" component={FAQ} />
        <Route path="/login" component={Login} />
        {/* <Route path="/register" component={Register} /> */}
      </div>
    </BrowserRouter>
  );
}
