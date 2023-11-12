import { PlusOutlined } from "@ant-design/icons";
import { Button, Table, Tabs } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { destroyAttribute, getListAttribute } from "src/auth/services";
import { columnsAttribute, columsOption } from "src/auth/utils/columns";
import {
  deleteDataByIdAndPath,
  getDataApiParams,
} from "src/auth/utils/fetchApi";

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

// const objItemColos = {
//   title: "Image",
//   dataIndex: "image",
//   render: (url) => <Image className="image-custom" src={url} />,
// };

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

  const dataOption = columsOption(
    (id) =>
      deleteDataByIdAndPath(
        dispatch,
        destroyAttribute,
        id,
        itemTabs.path,
        data,
        setData,
      ),
    "attribute",
  );

  columns.push(dataOption);

  // useEffect(() => {
  //   itemTabs.defaultKey === 1 && columns.push(objItemColos);
  // }, [itemTabs, columns, dataOption]);

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
