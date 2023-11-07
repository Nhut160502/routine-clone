import { Button, Form, Input } from "antd";
import React from "react";
import { rules } from "../configs";
import Uploads from "./Uploads";

const StoreColor = () => {
  return (
    <div>
      <div className="wrapper-form">
        <Form layout="vertical" style={{ width: "600px" }}>
          <Form.Item label="Name Color" name="name" rules={rules}>
            <Input />
          </Form.Item>
          <Uploads required name="img" label="Image" />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StoreColor;
