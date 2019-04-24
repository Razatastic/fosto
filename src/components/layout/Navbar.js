import React, { useState } from "react";
import { SignedInLinks, SignedOutLinks } from "./";
import fostoLogo from "../../assets/logo2.png";
import { Link } from "react-router-dom";

const logo = (
  <Link to="/">
    <img src={fostoLogo} className="logo" alt="Fosto logo" />
  </Link>
);

function Navbar() {
  const [auth, setAuth] = useState(true);
  return auth ? <SignedInLinks logo={logo} /> : <SignedOutLinks logo={logo} />;
}

export default Navbar;
