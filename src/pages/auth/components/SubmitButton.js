import React from "react";
import { Form, Button } from "antd";

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const SubmitButton = () => (
  <Form.Item {...tailFormItemLayout}>
    <Button type="primary" htmlType="submit">
      Register
    </Button>
  </Form.Item>
);

export default SubmitButton;
