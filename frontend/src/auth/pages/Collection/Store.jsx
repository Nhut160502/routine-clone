import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

import { rules } from "src/auth/configs";
import { Uploads } from "src/auth/components";
import { storeCollection } from "src/auth/services";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import toast from "src/auth/utils/toast";

const Store = (props) => {
  const { handleFinish } = props;

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
        dispatch(disActiveLoading());
        toast.success(res?.message || "Store Collection Successfully!");

        if (handleFinish) return handleFinish(res.data);

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
          <Input />
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

Store.propTypes = {
  handleFinish: PropTypes.func,
};

export default Store;
