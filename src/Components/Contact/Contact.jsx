import React from 'react'
import { Row, Col, Form, Input } from 'antd';

export default function Contact() {

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };

  return (
    <div>
      <h1>Contact us</h1>
      <Col>
        <Form {...formItemLayout}>
          <Form.Item label="First name"
            hasFeedback
          >
            <Input placeholder="Barnabé" />
          </Form.Item>
          <Form.Item label="Last name"
            hasFeedback
          >
            <Input placeholder="Collins" />
          </Form.Item>
          <Form.Item
            label="Email"
            hasFeedback
          >
            <Input placeholder="barnabecollins@mail.com" />
          </Form.Item>
        </Form>
      </Col>
    </div>
  )
}
