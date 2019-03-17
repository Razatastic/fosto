import React from "react";
import { Form, Input } from "antd";

const LastName = props => (
  <Form.Item label={<span>Last Name&nbsp;</span>}>
    {props.getFieldDecorator("lastname", {
      rules: [
        {
          required: true,
          message: "Please input your Last name!",
          whitespace: true
        }
      ]
    })(<Input />)}
  </Form.Item>
);

export default LastName;
