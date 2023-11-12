import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { rules } from "../../configs";
import Uploads from "../Uploads";
import { storeAttribute } from "src/auth/services";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";

const StoreColor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleSubmit = async (values) => {
    dispatch(activeLoading());
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("file", file);
      const res = await storeAttribute("colors", formData);
      if (res.success) {
        toast.success("Store color successfully!");
        navigate("/dashboard/attribute", {
          state: {
            defaultKey: 1,
          },
        });
      }
      dispatch(disActiveLoading());
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
        <Form.Item label="Name Color" name="name" rules={rules}>
          <Input />
        </Form.Item>
        <Uploads
          name="img"
          label="Image"
          onGetFiles={(files) => setFile(files[0])}
        />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default StoreColor;
