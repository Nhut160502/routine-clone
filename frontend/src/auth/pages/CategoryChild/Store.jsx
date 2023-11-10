import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { rules } from "src/auth/configs";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { getListCategory } from "src/auth/services";

const Store = () => {
  const dispatch = useDispatch();
  const [dataCategories, setDataCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(activeLoading());
      try {
        const res = await getListCategory();
        res.success &&
          res.data.map((item) =>
            setDataCategories((pre) => [
              ...pre,
              { label: item.name, value: item._id },
            ]),
          );
        dispatch(disActiveLoading());
      } catch (error) {
        dispatch(disActiveLoading());
        return error;
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="wrapper-form">
      <Form layout="vertical" style={{ width: "600px" }}>
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
