import { Button, Form, Input } from "antd";
import React from "react";
import { configsForm, rules } from "../../configs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { storeAttribute } from "src/auth/services";
import { toast } from "react-toastify";

const StoreForm = (props) => {
  const { handleFinish } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    dispatch(activeLoading());
    try {
      const formData = new FormData();
      formData.append("name", values.name);

      const res = await storeAttribute("forms", formData);

      if (res.success) {
        dispatch(disActiveLoading());
        toast.success(res?.message || "Store form successfully!");

        if (handleFinish) return handleFinish(res.data);

        navigate("/dashboard/attribute", {
          state: {
            defaultKey: 3,
          },
        });
      }
    } catch (error) {
      dispatch(disActiveLoading());
      return error;
    }
  };

  return (
    <div>
      <div className="wrapper-form">
        <Form {...configsForm} onFinish={handleSubmit}>
          <Form.Item label="Name Form" name="name" rules={rules}>
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

StoreForm.propTypes = {
  handleFinish: PropTypes.func,
};

export default StoreForm;
