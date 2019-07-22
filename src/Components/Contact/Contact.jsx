import React, { useState } from 'react';
import axios from 'axios';
import { Col, Form, Input, Button } from 'antd';
import confetti from '../../assets/images/confetti.gif'
import './Contact.css';

export default function Contact() {

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };

  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };

  const [contactDataSubmit, setContactDataSubmit] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })

  const submitForm = () => {
    console.log(contactDataSubmit);
    axios.post('http://localhost:8000/contact', contactDataSubmit)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div>
      <h1>Contact us</h1>
      <img src={confetti} alt="human canon ball" />
      <div className="contactForm">
        <Col span={21}>
          <Form.Item
            {...formItemLayout}
            label="First name"
          >
            <Input
              placeholder="Barnabé"
              onChange={(event) => setContactDataSubmit({ ...contactDataSubmit, firstname: event.target.value })}
            />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Last name"
          >
            <Input
              placeholder="Collins"
              onChange={(event) => setContactDataSubmit({ ...contactDataSubmit, lastname: event.target.value })}
            />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Email"
            onChange={() => console.log('string')}
          >
            <Input
              placeholder="barnabecollins@mail.com"
              onChange={(event) => setContactDataSubmit({ ...contactDataSubmit, email: event.target.value })}
            />
          </Form.Item>
          <Form.Item {...formTailLayout}>
            <Button
              type="primary"
              onClick={() => submitForm()}
            >
              Submit
        </Button>
          </Form.Item>
        </Col>
      </div>
    </div>
  )
}
