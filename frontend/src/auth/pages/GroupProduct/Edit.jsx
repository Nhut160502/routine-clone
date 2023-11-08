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

const Edit = () => {
  const { slug } = useParams();
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
      dispatch(disActiveLoading());
      navigate("/dashboard/group-product");
    } catch (error) {
      dispatch(disActiveLoading());
      return error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(activeLoading());
      try {
        const res = await showGroupProduct(slug);
        setData(res.data);
        dispatch(disActiveLoading());
      } catch (error) {
        dispatch(disActiveLoading());
        navigate("/dashboard/group-product");
        return error;
      }
    };
    fetchData();
  }, [slug, navigate, dispatch]);

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
        <Uploads data={data} label="Banner" onGetFiles={handleGetFiles} />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
