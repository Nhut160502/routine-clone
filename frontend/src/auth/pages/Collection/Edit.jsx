import React, { useEffect, useState } from "react";
import { rules } from "src/auth/configs";
import { Button, Form, Input } from "antd";
import Uploads from "src/auth/components/Uploads";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { showCollection } from "src/auth/services";
const Store = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(activeLoading());
      try {
        const res = await showCollection(slug);
        setData(res.data);
        dispatch(disActiveLoading());
      } catch (error) {
        disActiveLoading(disActiveLoading());
        return error;
      }
    };
    fetchData();
  }, [slug, dispatch]);
  return (
    <>
      <div className="wrapper-form">
        <Form
          layout="vertical"
          style={{ width: "600px" }}
          fields={[{ name: "name", value: data?.name }]}
        >
          <Form.Item label="Name" name="name" rules={rules}>
            <Input placeholder="Name group product" />
          </Form.Item>
          <Uploads required name="banner" label="Banner" data={data} />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Store;
