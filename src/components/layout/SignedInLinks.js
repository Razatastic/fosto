import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default function SignedInLinks({ logo }) {
  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">{logo}</Menu.Item>
      <Menu.Item
        key="2"
        style={{ float: "right" }}
        onClick={() => alert("Logged out!")}
      >
        Logout
      </Menu.Item>
      <Menu.Item key="3" style={{ float: "right" }}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="4" style={{ float: "right" }}>
        <Link to="/faq">FAQ</Link>
      </Menu.Item>
    </Menu>
  );
}
