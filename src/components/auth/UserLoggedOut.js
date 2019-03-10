import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";

export default function UserLoggedOut() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}
