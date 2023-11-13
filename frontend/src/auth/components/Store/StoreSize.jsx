import { Button, Form, Input } from "antd";
import React from "react";
import { rules } from "../../configs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { storeAttribute } from "src/auth/services";
import toast from "src/auth/utils/toast";

const StoreSize = (props) => {
  const { handleFinish } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    dispatch(activeLoading());
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      const res = await storeAttribute("sizes", formData);
      if (res.success) {
        toast.success(res?.message || "Store sizes successfully!");
        dispatch(disActiveLoading());

        if (handleFinish) return handleFinish(res.data);

        navigate("/dashboard/attribute", {
          state: {
            defaultKey: 2,
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
        <Form
          layout="vertical"
          style={{ width: "600px" }}
          onFinish={handleSubmit}
        >
          <Form.Item label="Name Size" name="name" rules={rules}>
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

StoreSize.propTypes = {
  handleFinish: PropTypes.func,
};

export default StoreSize;
