import React, { useEffect, useState } from "react";
import { rules } from "src/auth/configs";
import { Button, Form, Input } from "antd";
import Uploads from "src/auth/components/Uploads";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { showCollection, updateCollection } from "src/auth/services";
import toast from "src/auth/utils/toast";
import { getDataApiParams } from "src/auth/utils/fetchApi";
const Edit = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    getDataApiParams(dispatch, showCollection, slug, setData, true);
  }, [dispatch, slug]);

  const handleSubmit = async (values) => {
    dispatch(activeLoading());
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("id", data._id);
      formData.append("file", file);
      const res = await updateCollection(formData);
      if (res.success) {
        toast.success(res.message);
        navigate("/dashboard/collection");
      }
      dispatch(disActiveLoading());
    } catch (error) {
      dispatch(disActiveLoading());
      return error;
    }
  };

  return (
    <>
      <div className="wrapper-form">
        <Form
          onFinish={handleSubmit}
          layout="vertical"
          style={{ width: "600px" }}
          fields={[{ name: "name", value: data?.name }]}
        >
          <Form.Item label="Name" name="name" rules={rules}>
            <Input placeholder="Name group product" />
          </Form.Item>
          <Uploads
            onGetFiles={(files) => setFile(files[0])}
            name="banner"
            label="Banner"
            data={data?.banner}
          />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Edit;
