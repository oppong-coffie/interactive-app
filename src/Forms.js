import React from 'react'
import { useState } from 'react';
import './css/Forms.css';
import { useNavigate } from 'react-router';
import 'antd/dist/antd.css'
import {
  Form,
  Button,
  Checker,
  DatePicker,
  Select,
  Input,
  Checkbox,
} from "antd";

const Forms = ({numberChange, namechange, monthchange, yearchange, cvcchange, error}) => {
  const navigate = useNavigate()

  const handlesubmit = () => {
    navigate('/signup/report')
  }
  return (
    <div className='formcontainer'>
      <Form hideRequiredMark layout='vertical' className='mainform'
      onFinish={handlesubmit}>

<Form.Item
              label="CARRDHOLDER NAME"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
              className='formitem'
            >
              <Input type="text" placeholder="JANE APPLEASED" onChange={namechange} className='forminput' />
            </Form.Item>

            <Form.Item
              label="CARD NUMBER"
              name="cardnumber"
              rules={[
                {
                  required: true,
                  message: "Please input your card number!",
                },
                {
                  whitespace: false,
                }
              ]}
              className='formitem'
            >
              <Input
                type="text"
                placeholder="0000 0000 0000 0000"
                onChange={numberChange}
                className='forminput'
              />
            </Form.Item>
            
            
              <div className="date">
                <div className="mm">
                  <Form.Item label="EXP.DATE"
                  name="mm"
                  rules={[
                    {
                      required: true,
                      message: "cant be blank",
                    },
                  ]}
                  className='formitem'
                  >
                    <Input
                  type="text"
                  placeholder="MM"
                  onChange={monthchange}
                  className="month"
                />
                  </Form.Item>
                </div>
                <div className="formitem">
                  <Form.Item label="(MM/YY)"
                  name="year"
                  rules={[
                    {
                      required: true,
                      message: "input card number!",
                    },
                  ]}
                  className='formitem'
                  >
                    <Input
                  type="text"
                  placeholder="YY"
                  onChange={yearchange}
                  className="year"
                  
                />
                  </Form.Item>
                </div>
                <div className="cvc">
                  <Form.Item label="CVC" 
                  name="cvc"
                  rules={[
                    {
                      required: true,
                      message: "Cant be empty!",
                    },
                  ]}>
                    <Input
                  type="text"
                  placeholder="e.g. 123"
                  onChange={cvcchange}
                  className="cvcinput"
                />
                  </Form.Item>
                </div>
            </div>
            
            <Form.Item className='formitem'>
              <Button className="primary" htmlType="submit" >
                Submit
              </Button>
            </Form.Item>
          </Form>
    </div>
  )
}

export default Forms
