import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Uploads } from "src/auth/components";
import { rules } from "src/auth/configs";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { getListGroupProduct } from "src/auth/services";

const Store = () => {
  const dispatch = useDispatch();
  const [dataGroup, setDataGroup] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(activeLoading());
      try {
        const res = await getListGroupProduct();
        setDataGroup(res.data);
        dispatch(disActiveLoading());
      } catch (error) {
        dispatch(disActiveLoading());
        return error;
      }
    };
    fetchData();
  }, [dispatch]);

  const handleSubmit = () => {};

  return (
    <div className="wrapper-form">
      <Form
        layout="vertical"
        style={{ width: "600px" }}
        onFinish={handleSubmit}
      >
        <Form.Item label="Group product" name="groupProduct" rules={rules}>
          <div className="btn-open-form-add" onClick={{}}>
            <PlusOutlined className="btn-icon-add" />
          </div>
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.name ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.name ?? "")
                .toLowerCase()
                .localeCompare((optionB?.name ?? "").toLowerCase())
            }
            options={dataGroup}
          />
        </Form.Item>
        <Form.Item label="Name" name="name" rules={rules}>
          <Input placeholder="Name group product" />
        </Form.Item>
        <Uploads required name="banner" label="Banner" multiple />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Store;
