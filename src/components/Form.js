import React, { Component } from "react";
import { Form, DatePicker, Button, Input, Row, Col, Radio } from "antd";
import Email from "../pages/auth/components/Email";

const RadioGroup = Radio.Group;

class LostForm extends Component {
  state = {
    value: 1
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      // Should format date value before submit.
      const values = {
        ...fieldsValue,
        "date-picker": fieldsValue["date-picker"].format("MM-DD-YYYY")
      };
      console.log("Received values of form: ", values);
    });
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
      <Row className="vertical-center" style={{ paddingTop: 40 }}>
        <Col>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            {/* Radio Button to switch between lost and found posting */}
            <Form.Item label="Pick one:">
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>Lost</Radio>
                <Radio value={2}>Found</Radio>
              </RadioGroup>
            </Form.Item>

            <Form.Item label="Date">
              {getFieldDecorator("date-picker", config)(<DatePicker />)}
            </Form.Item>

            <Form.Item label={<span>Item</span>}>
              {getFieldDecorator("itemLost", {
                rules: [
                  {
                    required: true,
                    message: "Please enter the item you've lost",
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label={<span>Location</span>}>
              {getFieldDecorator("location", {
                rules: [
                  {
                    required: true,
                    message: "Please enter location.",
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Email getFieldDecorator={getFieldDecorator} />

            <Form.Item label="Phone Number">
              <Input />
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
