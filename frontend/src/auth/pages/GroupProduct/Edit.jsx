import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { Uploads } from "src/auth/components";
import { rules } from "src/auth/configs";

const data = [
  {
    name: "Text",
    img: "https://routine.vn/media/thoi-trang-nam.jpg",
  },
];

const Edit = () => {
  const [values, setValues] = useState({ name: null, file: null });
  const handleGetFiles = (files) => setValues({ ...values, file: files[0] });
  return (
    <div className="wrapper-form">
      <Form
        layout="vertical"
        style={{ width: "600px" }}
        fields={[{ name: "name", value: data[0].name }]}
      >
        <Form.Item label="Name" name="name" rules={rules}>
          <Input
            placeholder="Name group product"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </Form.Item>
        <Uploads
          data={data}
          required
          name="banner"
          label="Banner"
          onGetFiles={handleGetFiles}
        />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
