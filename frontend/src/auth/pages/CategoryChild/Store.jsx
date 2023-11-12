import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { rules } from "src/auth/configs";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { getListCategory, storeCategoryChild } from "src/auth/services";
import { getDataApi } from "src/auth/utils/fetchApi";

const Store = () => {
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
      res.success && navigate("/dashboard/category-child");
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
