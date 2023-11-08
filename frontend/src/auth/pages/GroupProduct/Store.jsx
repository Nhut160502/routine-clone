import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Uploads } from "src/auth/components";
import { rules } from "src/auth/configs";
import { storeGroupProduct } from "src/auth/services";

const Store = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: null, file: null });
  const handleGetFiles = (files) => setValues({ ...values, file: files[0] });
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", values.file);
      formData.append("name", values.name);
      const res = await storeGroupProduct(formData);
      navigate("/dashboard/group-product");
    } catch (error) {
      return error;
    }
  };
  return (
    <div className="wrapper-form">
      <Form
        onSubmitCapture={handleSubmit}
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
