import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Uploads } from "src/auth/components";
import { rules } from "src/auth/configs";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { storeGroupProduct } from "src/auth/services";
import toast from "src/auth/utils/toast";

const Store = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({ name: null, file: null });
  const handleGetFiles = (files) => setValues({ ...values, file: files[0] });

  const handleSubmit = async (e) => {
    dispatch(activeLoading());
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", values.file);
      formData.append("name", values.name);
      await storeGroupProduct(formData);
      toast.success("Store Group Product Successfully!");
      navigate("/dashboard/group-product");
    } catch (error) {
      dispatch(disActiveLoading());
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
        />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Store;
