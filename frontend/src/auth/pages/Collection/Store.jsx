import React, { useState } from "react";
import { rules } from "src/auth/configs";
import { Button, Form, Input } from "antd";
import { Uploads } from "src/auth/components";
import { storeCollection } from "src/auth/services";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import toast from "src/auth/utils/toast";
const Store = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const handleSubmit = async (values) => {
    dispatch(activeLoading());
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("file", file);

      const res = await storeCollection(formData);
      if (res.success) {
        toast.success("Store Collection Successfully!");
        navigate("/dashboard/collection");
      }
    } catch (error) {
      dispatch(disActiveLoading());
      return error;
    }
  };
  return (
    <div className="wrapper-form">
      <Form
        layout="vertical"
        style={{ width: "600px" }}
        onFinish={handleSubmit}
      >
        <Form.Item label="Name" name="name" rules={rules}>
          <Input placeholder="Name group product" />
        </Form.Item>
        <Uploads
          onGetFiles={(files) => setFile(files[0])}
          name="banner"
          label="Banner"
        />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Store;
