import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Uploads } from "src/auth/components";
import { rules } from "src/auth/configs";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import {
  getListGroupProduct,
  showCategory,
  updateCategory,
} from "src/auth/services";
import { getDataApi, getDataApiParams } from "src/auth/utils/fetchApi";
import toast from "src/auth/utils/toast";

const Edit = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const [dataGroup, setDataGroup] = useState([]);

  //fetch data
  useEffect(() => {
    getDataApiParams(dispatch, showCategory, slug, setData, true);
    getDataApi(dispatch, getListGroupProduct, setDataGroup);
  }, [slug, dispatch]);

  const handleSubmit = async (values) => {
    dispatch(activeLoading());
    try {
      const formData = new FormData();
      formData.append("id", data?._id);
      formData.append("groupProduct", values.groupProduct);
      formData.append("name", values.name);
      formData.append("file", file);

      const res = await updateCategory(formData);

      if (res.success) {
        toast.success(res.message);
        navigate("/dashboard/category");
      }
      dispatch(disActiveLoading());
    } catch (error) {
      dispatch(disActiveLoading());
      return error;
    }
  };

  return (
    <div className="wrapper-form">
      <Form
        onFinish={handleSubmit}
        layout="vertical"
        style={{ width: "600px" }}
        fields={[
          { name: "name", value: data?.name },
          { name: "groupProduct", value: data?.groupProduct?._id },
        ]}
      >
        <Form.Item label="Group product" name="groupProduct" rules={rules}>
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
            options={dataGroup}
          />
        </Form.Item>
        <Form.Item label="Name" name="name" rules={rules}>
          <Input placeholder="Name group product" />
        </Form.Item>
        <Uploads
          name="banner"
          label="Banner"
          data={data?.banner}
          onGetFiles={(files) => setFile(files[0])}
        />
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
