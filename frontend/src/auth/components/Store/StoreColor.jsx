import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

import { configsForm, rules } from "../../configs";
import Uploads from "../Uploads";
import { storeColor } from "src/auth/services";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";

const StoreColor = (props) => {
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

      const res = await storeColor("colors", formData);

      if (res.success) {
        dispatch(disActiveLoading());
        toast.success(res?.message || "Store color successfully!");

        if (handleFinish) return handleFinish(res.data);

        navigate("/dashboard/attribute", {
          state: {
            defaultKey: 1,
          },
        });
      }
    } catch (error) {
      dispatch(disActiveLoading());
      return error;
    }
  };

  return (
    <div className="wrapper-form">
      <Form {...configsForm} onFinish={handleSubmit}>
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

StoreColor.propTypes = {
  handleFinish: PropTypes.func,
};

export default StoreColor;
