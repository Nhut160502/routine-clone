import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Uploads } from "src/auth/components";
import { rules } from "src/auth/configs";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { storeGroupProduct } from "src/auth/services";
import toast from "src/auth/utils/toast";

const Store = (props) => {
  const { handleFinish } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [file, setFile] = useState(null);

  const handleSubmit = async (values) => {
    dispatch(activeLoading());
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", values.name);
      formData.append("shortcut", values.shortcut);
      const res = await storeGroupProduct(formData);
      if (res.success) {
        (location.pathname === "/dashboard/group-product/store" &&
          navigate("/dashboard/group-product")) ||
          (handleFinish && handleFinish(res));
        toast.success("Store Group Product Successfully!");
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
        onFinish={handleSubmit}
        layout="vertical"
        style={{ width: "600px" }}
      >
        <Form.Item label="Name" name="name" rules={rules}>
          <Input />
        </Form.Item>
        <Form.Item label="Shortcut" name="shortcut" rules={rules}>
          <Input />
        </Form.Item>
        <Uploads
          name="banner"
          label="Banner"
          onGetFiles={(files) => setFile(files[0])}
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
