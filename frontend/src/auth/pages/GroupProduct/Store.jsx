import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import Uploads from "src/auth/components/Uploads";

const Store = () => {
  const [values, setValues] = useState({
    name: null,
    file: null,
  });
  console.log(values);
  return (
    <div className="wrapper-form">
      <Form layout="vertical" style={{ width: "600px" }}>
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input placeholder="Name group product" />
        </Form.Item>
        <Form.Item
          label="Banner"
          name="banner"
          rules={[{ required: true }]}
          initialValue={values.file}
        >
          <Uploads />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Store;
