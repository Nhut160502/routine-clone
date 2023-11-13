import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { Uploads } from "src/auth/components";
import { configsForm, configsSelect, rules } from "src/auth/configs";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { getListGroupProduct, storeCategory } from "src/auth/services";
import { useNavigate } from "react-router-dom";
import toast from "src/auth/utils/toast";
import { getDataApi } from "src/auth/utils/fetchApi";

const Store = (props) => {
  const { handleFinish } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataGroup, setDataGroup] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    getDataApi(dispatch, getListGroupProduct, setDataGroup);
  }, [dispatch]);

  const handleSubmit = async (values) => {
    dispatch(activeLoading());
    try {
      const formData = new FormData();

      formData.append("groupProduct", values.groupProduct);
      formData.append("name", values.name);
      formData.append("file", file);

      const res = await storeCategory(formData);

      if (res.success) {
        dispatch(disActiveLoading());
        toast.success(res?.message || "Store Category Successfully!");

        if (handleFinish) return handleFinish(res.data);

        navigate("/dashboard/category");
      }
    } catch (error) {
      dispatch(disActiveLoading());
      return error;
    }
  };

  return (
    <div className="wrapper-form">
      <Form {...configsForm} onFinish={handleSubmit}>
        <Form.Item label="Group product" name="groupProduct" rules={rules}>
          <Select
            {...configsSelect}
            placeholder="Search to Select"
            options={dataGroup}
          />
        </Form.Item>
        <Form.Item label="Name" name="name" rules={rules}>
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
