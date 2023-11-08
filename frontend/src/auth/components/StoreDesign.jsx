import { Button, Form, Input } from "antd";
import React from "react";
import { rules } from "../configs";

const StoreDesign = () => {
  return (
    <div>
      <div className="wrapper-form">
        <Form layout="vertical" style={{ width: "600px" }}>
          <Form.Item label="Name Design" name="name" rules={rules}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StoreDesign;