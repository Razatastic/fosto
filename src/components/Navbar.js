import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

export default class App extends Component {
  state = {
    current: "home"
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        {/* Link to Home Page */}
        <Menu.Item key="home">
          <NavLink to="/">
            <img src={Logo} style={{ width: "10vh" }} alt="logo" />
          </NavLink>
        </Menu.Item>
        {/* Link to Lost/Found Forms */}
        <Menu.Item key="submission-form">
          <NavLink to="/submission-form">
            <Icon type="form" />
            Forms
          </NavLink>
        </Menu.Item>
        {/* Link to FAQ Page */}
        <Menu.Item key="faq">
          <NavLink to="/faq">
            <Icon type="question-circle" />
            FAQ
          </NavLink>
        </Menu.Item>
        {/* Link to Login Page */}
        <Menu.Item
          key="login"
          onClick={this.handleBrick}
          style={{ float: "right" }}
        >
          <NavLink to="/login">
            <Icon type="login" />
            Login
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}
