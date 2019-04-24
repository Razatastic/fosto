import React, { useState } from "react";
import { SignedInLinks, SignedOutLinks } from "./";

function Navbar() {
  const [auth, setAuth] = useState(false);
  return auth ? <SignedInLinks /> : <SignedOutLinks auth={setAuth} />;
}

export default Navbar;
