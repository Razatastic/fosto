import React from "react";
import { Form, Input } from "antd";

const FirstName = props => (
  <Form.Item label={<span>First Name&nbsp;</span>}>
    {props.getFieldDecorator("firstname", {
      rules: [
        {
          required: true,
          message: "Please input your First name!",
          whitespace: true
        }
      ]
    })(<Input />)}
  </Form.Item>
);

export default FirstName;
