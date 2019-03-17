import React from "react";
import { Form, Input } from "antd";

const Email = props => (
  <Form.Item label="E-mail">
    {props.getFieldDecorator("email", {
      rules: [
        {
          type: "email",
          message: "The input is not valid E-mail!"
        },
        {
          required: true,
          message: "Please input your E-mail!"
        }
      ]
    })(<Input />)}
  </Form.Item>
);

export default Email;
