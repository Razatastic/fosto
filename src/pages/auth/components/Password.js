import React from "react";
import { Form, Input } from "antd";

const Password = props => (
  <Form.Item label="Password">
    {props.getFieldDecorator("password", {
      rules: [
        {
          required: true,
          message: "Please input your password!"
        },
        {
          validator: props.validateToNextPassword
        }
      ]
    })(<Input type="password" />)}
  </Form.Item>
);

export default Password;
