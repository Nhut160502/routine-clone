import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import Uploads from "src/auth/components/Uploads";
import { rules } from "src/auth/configs";

const Store = () => {
  const [values, setValues] = useState({ name: null, file: null });
  const handleGetFiles = (files) => setValues({ ...values, file: files[0] });
  return (
    <div className="wrapper-form">
      <Form
        layout="vertical"
        style={{ width: "600px" }}
        fields={[{ name: "banner", value: values.file }]}
      >
        <Form.Item label="Name" name="name" rules={rules}>
          <Input
            placeholder="Name group product"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </Form.Item>
        <Uploads
          required
          name="banner"
          label="Banner"
          onGetFiles={handleGetFiles}
          multiple
        />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Store;
