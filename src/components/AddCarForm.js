import React from 'react';
import { Form, Input, Button, Select, Typography } from 'antd';

const { Option } = Select;

const AddCarForm = ({ onSubmit }) => {
  const onFinish = (values) => {
    // Call the onSubmit function with the form values
    onSubmit(values);
  };

  return (
    <div>
      <Typography.Title level={3}>Add a New Car</Typography.Title>
      <Form
        name="addCarForm"
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
      >
        <Form.Item
          label="Make"
          name="make"
          rules={[{ required: true, message: 'Please enter the car make!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Model"
          name="model"
          rules={[{ required: true, message: 'Please enter the car model!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Year"
          name="year"
          rules={[{ required: true, message: 'Please enter the car year!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Color" name="color">
          <Input />
        </Form.Item>

        <Form.Item label="Engine Type" name="engineType">
          <Input />
        </Form.Item>

        <Form.Item label="Transmission Type" name="transmissionType">
          <Input />
        </Form.Item>

        <Form.Item label="Fuel Type" name="fuelType">
          <Input />
        </Form.Item>

        <Form.Item
          label="Seller Contact"
          name="sellerContact"
          rules={[{ required: true, message: 'Please enter the seller contact!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Picture URL"
          name="pic"
          rules={[{ required: true, message: 'Please enter the picture URL!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
          <Button type="primary" htmlType="submit">
            Add Car
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCarForm;

/*
// AddCarForm.js

import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const AddCarForm = ({ onSubmit }) => {
  const onFinish = (values) => {
    // Call the onSubmit function with the form values
    onSubmit(values);
  };

  return (
    <div>
      <Title level={3}>Add a New Car</Title>
      <Form
        name="addCarForm"
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
      >
     

        <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
          <Button type="primary" htmlType="submit">
            Add Car
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCarForm;


*/
