import {
  DeleteOutlined,
  EllipsisOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Table, Tabs } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  activeModal,
  disActiveModal,
  handleModalDelete,
} from "src/auth/providers/modalSlice";
import { destroyAttribute, getListAttribute } from "src/auth/services";
import { columnsAttribute } from "src/auth/utils/columns";
import { getDataApiParams } from "src/auth/utils/fetchApi";
import toast from "src/auth/utils/toast";

const items = [
  {
    label: "Colors",
    path: "colors",
    key: 1,
    to: "/dashboard/attribute/store/colors",
  },
  {
    label: "Sizes",
    path: "sizes",
    key: 2,
    to: "/dashboard/attribute/store/sizes",
  },
  {
    label: "Form",
    path: "forms",
    key: 3,
    to: "/dashboard/attribute/store/form",
  },
  {
    label: "Materials",
    path: "materials",
    key: 4,
    to: "/dashboard/attribute/store/material",
  },
  {
    label: "Sex",
    path: "sex",
    key: 5,
    to: "/dashboard/attribute/store/sex",
  },
  {
    label: "Designs",
    path: "designs",
    key: 6,
    to: "/dashboard/attribute/store/design",
  },
  {
    label: "Hand Type",
    path: "hand-types",
    key: 7,
    to: "/dashboard/attribute/store/hand-type",
  },
  {
    label: "Collar Type",
    path: "collar-types",
    key: 8,
    to: "/dashboard/attribute/store/collar-type",
  },
];

const List = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [data, setData] = useState([]);

  const [itemTabs, setItemTabs] = useState({
    defaultKey: state?.defaultKey || 1,
    path: items.find((item) =>
      state?.defaultKey ? item.key === state?.defaultKey : 1,
    ).path,
    url: items.find((item) =>
      state?.defaultKey ? item.key === state?.defaultKey : 1,
    ).to,
  });

  const columns = columnsAttribute();
  columns.push({
    dataIndex: "_id",
    key: "_id",
    render: (_, record) => {
      return (
        <form className="action">
          <Link to={`/dashboard/attribute/edit/${record?.slug}`}>
            <Button type="primary" icon={<EllipsisOutlined />} />
          </Link>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record._id)}
          />
        </form>
      );
    },
  });

  const handleDelete = (id) => {
    dispatch(activeModal());
    const handle = async () => {
      try {
        const res = await destroyAttribute(itemTabs.path, id);

        if (res.success) {
          setData(data.filter((item) => item._id !== id));
          toast.success(res.message || "Delete attribute successfully!");
        }

        dispatch(disActiveModal());
      } catch (error) {
        dispatch(disActiveModal());
        return error;
      }
    };
    dispatch(handleModalDelete(handle));
  };

  // fetch data
  useEffect(() => {
    getDataApiParams(dispatch, getListAttribute, itemTabs.path, setData, true);
  }, [dispatch, itemTabs.path]);

  const handleChangeTabs = (id) => {
    const item = items.find((value) => value.key === id);
    setItemTabs({ path: item.path, url: item.to, defaultKey: id });
  };

  return (
    <>
      <div className="btn-add-dash">
        <Link to={itemTabs.url}>
          <Button type="primary" icon={<PlusOutlined />} />
        </Link>
      </div>
      <Tabs
        items={items}
        onChange={handleChangeTabs}
        defaultActiveKey={itemTabs.defaultKey}
      />
      <Table dataSource={data} columns={columns} rowKey="_id" />
    </>
  );
};

export default List;
