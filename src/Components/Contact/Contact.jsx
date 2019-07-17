import React, { useState, useEffect } from 'react';
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

  const [contactDataSubmit, setContactDataSubmit ] = useState({
    firstname:"",
    lastname:"",
    email:""
  })

  const submitForm = () => {
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
          onChange={(event) => setContactDataSubmit({...contactDataSubmit, firstname: event.target.value})}
          >
          <Input placeholder="Barnabé" />
        </Form.Item>
        <Form.Item 
          {...formItemLayout} 
          label="Last name"
          onChange={(event) => setContactDataSubmit({...contactDataSubmit, lastname: event.target.value})}
          >
          <Input placeholder="Collins" />
        </Form.Item>
        <Form.Item 
        {...formItemLayout} 
        label="Email"
        onChange={(event) => setContactDataSubmit({...contactDataSubmit, email: event.target.value})}
        >
          <Input placeholder="barnabecollins@mail.com" />
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
