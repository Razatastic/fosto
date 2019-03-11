import React, { Component } from "react";
import { Form, DatePicker, Button, Input, Row, Col } from "antd";

class LostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const values = {
        ...fieldsValue,
        "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD")
      };
      console.log("Received values of form: ", values);
    });
  };

  state = {
    confirmDirty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      }
    };
    const config = {
      rules: [
        { type: "object", required: true, message: "Please select a date" }
      ]
    };

    return (
      <Row className="center">
        <Col>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Date">
              {getFieldDecorator("date-picker", config)(<DatePicker />)}
            </Form.Item>

            <Form.Item label="Found Item">
              {getFieldDecorator("itemLost", {
                rules: [
                  {
                    required: true,
                    message: "Please enter the item you've found",
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Drop Off Location">
              {getFieldDecorator("location", {
                rules: [
                  {
                    required: true,
                    message: "Please enter the drop off location of the item",
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="E-mail">
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail"
                  },
                  {
                    required: true,
                    message: "Please enter your E-mail"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Phone Number">
              {getFieldDecorator("phone", {
                rules: [
                  {
                    required: false,
                    message: "Please input your phone number!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item
              wrapperCol={{
                xs: { span: 24, offset: 0 },
                sm: { span: 16, offset: 8 }
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Form.create({ name: "time_related_controls" })(LostForm);
