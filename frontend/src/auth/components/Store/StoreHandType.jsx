import { Button, Form, Input } from "antd";
import React from "react";
import { rules } from "../../configs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { storeHandType } from "src/auth/services";
import toast from "src/auth/utils/toast";

const StoreHandType = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    dispatch(activeLoading());
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      const res = await storeHandType(formData);
      if (res.success) {
        toast.success("Store hand type successfully!");
        navigate("/dashboard/attribute", {
          state: {
            defaultKey: 7,
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
    <div>
      <div className="wrapper-form">
        <Form
          layout="vertical"
          style={{ width: "600px" }}
          onFinish={handleSubmit}
        >
          <Form.Item label="Name Hand Type" name="name" rules={rules}>
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

export default StoreHandType;
