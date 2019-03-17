import React from "react";
import { Form, Input } from "antd";

const ConfirmPassword = props => (
  <Form.Item label="Confirm Password">
    {props.getFieldDecorator("confirm", {
      rules: [
        {
          required: true,
          message: "Please confirm your password!"
        },
        {
          validator: props.compareToFirstPassword
        }
      ]
    })(<Input type="password" onBlur={props.handleConfirmBlur} />)}
  </Form.Item>
);

export default ConfirmPassword;
