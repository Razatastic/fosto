import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import logo from "../../assets/logo2.png";
import { connect } from "react-redux";

function NavigationBar({ auth }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand tag={Link} to="/">
          <img src={logo} alt="logo" style={{ width: 120 }} />
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(NavigationBar);
