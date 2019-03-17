import React, { Component } from "react";
import { Form, Row, Col } from "antd";
import FirstName from "./components/FirstName";
import LastName from "./components/LastName";
import Email from "./components/Email";
import Password from "./components/Password";
import ConfirmPassword from "./components/ConfirmPassword";
import SubmitButton from "./components/SubmitButton";
import "../../styles/Register.css";

class RegistrationForm extends Component {
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

  compareToFirstPassword = (value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (value, callback) => {
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

    return (
      <Row className="vertical-center" style={{ paddingTop: 120 }}>
        <Col>
          <h2 className="header"> Register a new account</h2>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <FirstName getFieldDecorator={getFieldDecorator} />
            <LastName getFieldDecorator={getFieldDecorator} />
            <Email getFieldDecorator={getFieldDecorator} />
            <Password
              getFieldDecorator={getFieldDecorator}
              validateToNextPassword={this.validateToNextPassword}
            />
            <ConfirmPassword
              getFieldDecorator={getFieldDecorator}
              compareToFirstPassword={this.compareToFirstPassword}
              handleConfirmBlur={this.handleConfirmBlur}
            />
            <SubmitButton getFieldDecorator={getFieldDecorator} />
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Form.create({ name: "register" })(RegistrationForm);
