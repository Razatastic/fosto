import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "../Navbar";

export default function UserLoggedOut() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}
