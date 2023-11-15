import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Uploads } from "src/auth/components";
import { rules } from "src/auth/configs";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { showGroupProduct, updateGroupProduct } from "src/auth/services";
import { getDataApiParams } from "src/auth/utils/fetchApi";
import toast from "src/auth/utils/toast";

const Edit = () => {
  const { slug } = useParams();
  console.log(slug);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [file, setFile] = useState(null);
  const handleGetFiles = (files) => setFile(files[0]);

  const handleSubmit = async (values) => {
    dispatch(activeLoading());
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("file", file);
      formData.append("id", data?._id);
      await updateGroupProduct(formData);
      toast.success("Update Group Product Successfully!");
      navigate("/dashboard/group-product");
    } catch (error) {
      dispatch(disActiveLoading());
      return error;
    }
  };

  useEffect(() => {
    getDataApiParams(dispatch, showGroupProduct, slug, setData);
  }, [slug, dispatch]);

  console.log(data);

  return (
    <div className="wrapper-form">
      <Form
        onFinish={handleSubmit}
        layout="vertical"
        style={{ width: "600px" }}
        fields={[{ name: "name", value: data.name }]}
      >
        <Form.Item label="Name" name="name" rules={rules}>
          <Input placeholder="Name group product" />
        </Form.Item>
        <Uploads
          data={data?.banner}
          label="Banner"
          onGetFiles={handleGetFiles}
        />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
