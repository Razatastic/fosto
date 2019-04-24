import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default function SignedInLinks() {
  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">
        <Link to="/faq">FAQ</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="3" onClick={() => alert("Logged out!")}>
        Logout
      </Menu.Item>
    </Menu>
  );
}
