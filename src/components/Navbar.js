import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

export default class App extends Component {
  state = {
    current: 'home'
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
        mode='horizontal'
      >
        {/* Link to Home Page */}
        <Menu.Item key='home'>
          <NavLink to='/'>
            <Icon type='home' />
            Fosto
          </NavLink>
        </Menu.Item>
        {/* Link to Lost/Found Forms */}
        <Menu.Item key='forms'>
          <NavLink to='/forms'>
            <Icon type='form' />
            Forms
          </NavLink>
        </Menu.Item>
        {/* Link to FAQ Page */}
        <Menu.Item key='faq'>
          <NavLink to='/faq'>
            <Icon type='question-circle' />
            FAQ
          </NavLink>
        </Menu.Item>
        {/* Link to Login Page */}
        <Menu.Item key='login' onClick={this.handleBrick}>
          <NavLink to='/login'>
            <Icon type='login' />
            Login
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}
