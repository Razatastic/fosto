import React, { Component } from "react";
import { Menu, Icon } from "antd";

export default class App extends Component {
  state = {
    current: "home"
  };

  handleClick = e => {
    console.log("click ", e);
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
        <Menu.Item key="home">
          <Icon type="home" />
          Fosto
        </Menu.Item>
        <Menu.Item key="faq">
          <Icon type="question-circle" />
          FAQ
        </Menu.Item>
        <Menu.Item key="login">
          <Icon type="login" />
          Login
        </Menu.Item>
      </Menu>
    );
  }
}
