import React from "react";
import { rules } from "src/auth/configs";
import { Button, Form, Input } from "antd";
import Uploads from "src/auth/components/Uploads";
const Store = () => {
  return (
    <>
      <div className="wrapper-form">
        <Form layout="vertical" style={{ width: "600px" }}>
          <Form.Item label="Name" name="name" rules={rules}>
            <Input placeholder="Name group product" />
          </Form.Item>
          <Uploads required name="banner" label="Banner" multiple />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Store;
