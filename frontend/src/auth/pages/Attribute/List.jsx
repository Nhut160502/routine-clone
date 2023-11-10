import {
  DeleteOutlined,
  EllipsisOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Image, Table, Tabs } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import {
  getListColor,
  getListDesign,
  getListForm,
  getListHandType,
  getListMaterial,
  getListSex,
  getListSize,
} from "src/auth/services";
import { columnsAttribute } from "src/auth/utils/columns";

const items = [
  {
    label: "Colors",
    key: 1,
    to: "/dashboard/attribute/store/colors",
  },
  {
    label: "Sizes",
    key: 2,
    to: "/dashboard/attribute/store/sizes",
  },
  {
    label: "Form",
    key: 3,
    to: "/dashboard/attribute/store/form",
  },
  {
    label: "Materials",
    key: 4,
    to: "/dashboard/attribute/store/material",
  },
  {
    label: "Sex",
    key: 5,
    to: "/dashboard/attribute/store/sex",
  },
  {
    label: "Designs",
    key: 6,
    to: "/dashboard/attribute/store/design",
  },
  {
    label: "Hand Type",
    key: 7,
    to: "/dashboard/attribute/store/hand-type",
  },
];

const objItemColos = {
  title: "Image",
  dataIndex: "image",
  render: (url) => <Image className="image-custom" src={url} />,
};

const List = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(null);
  const { state } = useLocation();
  const [defaultKey, setDefaultKey] = useState(state?.defaultKey || 1);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setUrl(items.find((item) => item.key === defaultKey).to);

    setColumns(columnsAttribute());

    defaultKey === 1 && setColumns((pre) => [...pre, objItemColos]);

    setColumns((pre) => [
      ...pre,
      {
        dataIndex: "_id",
        key: "_id",
        render: (_, record) => {
          return (
            <form className="action">
              <Link to={`/dashboard/category/edit/${record?.slug}`}>
                <Button type="primary" icon={<EllipsisOutlined />} />
              </Link>
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(record?._id)}
              />
            </form>
          );
        },
      },
    ]);
  }, [defaultKey]);

  const handleChangeTabs = (id) => {
    setUrl(items.find((item) => item.key === id).to);
    setDefaultKey(id);
  };

  // fetch data
  useEffect(() => {
    setData([]);
    const fetchData = async (callApi) => {
      dispatch(activeLoading());
      try {
        const res = await callApi();
        res.success && setData(res.data);
        dispatch(disActiveLoading());
      } catch (error) {
        dispatch(disActiveLoading());
        return error;
      }
    };
    switch (defaultKey) {
      case 1:
        fetchData(getListColor);
        break;
      case 2:
        fetchData(getListSize);
        break;
      case 3:
        fetchData(getListForm);
        break;
      case 4:
        fetchData(getListMaterial);
        break;
      case 5:
        fetchData(getListSex);
        break;
      case 6:
        fetchData(getListDesign);
        break;
      case 7:
        fetchData(getListHandType);
        break;
      default:
        break;
    }
  }, [defaultKey, dispatch]);

  const handleDelete = (id) => {};
  return (
    <>
      <div className="btn-add-dash">
        <Link to={url}>
          <Button type="primary" icon={<PlusOutlined />} />
        </Link>
      </div>
      <Tabs
        items={items}
        onChange={handleChangeTabs}
        defaultActiveKey={defaultKey}
      />
      <Table dataSource={data} columns={columns} rowKey="_id" />
    </>
  );
};

export default List;
