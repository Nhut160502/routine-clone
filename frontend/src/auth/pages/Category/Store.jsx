import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { Uploads } from "src/auth/components";
import { rules } from "src/auth/configs";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { getListGroupProduct, storeCategory } from "src/auth/services";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "src/auth/utils/toast";

const Store = (props) => {
  const { handleFinish } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [dataGroup, setDataGroup] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(activeLoading());
      try {
        const { data } = await getListGroupProduct();

        data.map((item) =>
          setDataGroup((pre) => [
            ...pre,
            { value: item._id, label: item.name },
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

  const handleSubmit = async (values) => {
    dispatch(activeLoading());
    try {
      const formData = new FormData();

      formData.append("groupProduct", values.groupProduct);
      formData.append("name", values.name);
      formData.append("file", file);

      const res = await storeCategory(formData);

      if (res.success) {
        (location.pathname === "/dashboard/category/store" &&
          navigate("/dashboard/category")) ||
          (handleFinish && handleFinish(res));

        toast.success("Store Category Successfully!");
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
        layout="vertical"
        style={{ width: "600px" }}
        onFinish={handleSubmit}
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
