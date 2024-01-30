import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import { Space, Rate } from 'antd';
import ContactImage from './ContactImage';


const Contact = () => {

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
  const [value, setValue] = useState(3);
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const { TextArea } = Input;

  return (
    <div className="Contact" id='contact'>
        <div>
            <h1>Contact Us</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam explicabo 
               
            </p>
            {/* <img src="../Layout/contact.svg" alt="" /> */}
            <ContactImage/>
        </div>
        <div>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
   <Form.Item<FieldType>
      label="usename"
      name="username"
      rules={[{ required: true, message: 'Please input your name!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Password"
      name="password"
    >
      <Input.Password />
    </Form.Item>

    <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>

    <Form.Item label="Rate Us">
       <Space className='ms-3'>
      <Rate tooltips={desc} onChange={setValue} value={value} />
    </Space>
        </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button block type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
        </div>
    </div>
  )
}

export default Contact