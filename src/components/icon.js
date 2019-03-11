import React, { Component } from "react";
import { Form, DatePicker, Button, Icon } from "antd";

function readIcon() {
  return (
    <div className="icons-list">
      <Icon type="home" />
      <Icon type="setting" theme="filled" />
      <Icon type="smile" theme="outlined" />
      <Icon type="sync" spin />
      <Icon type="smile" rotate={180} />
      <Icon type="loading" />
    </div>
  );
}

export default readIcon;
