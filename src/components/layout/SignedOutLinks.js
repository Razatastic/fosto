import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import logo from "../../assets/logo2.png";

export default function SignedOutLinks() {
  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">
        <Link to="/">
          <img src={logo} className="logo" alt="Fosto logo" />
        </Link>
      </Menu.Item>
      <Menu.Item key="2" style={{ float: "right" }}>
        <Link to="/login"> Sign In</Link>
      </Menu.Item>
      <Menu.Item key="3" style={{ float: "right" }}>
        <Link to="/signup"> Sign Up</Link>
      </Menu.Item>
    </Menu>
  );
}
