import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

import { rules } from "src/auth/configs";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { getListCategory, storeCategoryChild } from "src/auth/services";
import { getDataApi } from "src/auth/utils/fetchApi";
import toast from "src/auth/utils/toast";

const Store = (props) => {
  const { handleFinish } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataCategories, setDataCategories] = useState([]);

  useEffect(() => {
    getDataApi(dispatch, getListCategory, setDataCategories);
  }, [dispatch]);

  const handleSubmit = async (values) => {
    dispatch(activeLoading());
    try {
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("category", values.category);

      const res = await storeCategoryChild(formData);

      if (res.success) {
        dispatch(disActiveLoading());
        toast.success(res?.message || "Store Category Child Successfully!");

        if (handleFinish) return handleFinish(res.data);

        navigate("/dashboard/category-child");
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
        <Form.Item label="Category" name="category" rules={rules}>
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={dataCategories}
          />
        </Form.Item>

        <Form.Item label="Name" name="name" rules={rules}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Store;

Store.propTypes = {
  handleFinish: PropTypes.func,
};
