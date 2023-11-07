import { PlusOutlined } from "@ant-design/icons";
import { Button, Dropdown, Table, Tabs } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const items = [
    {
      label: "Colors",
      key: 1,
    },
    {
      label: "Sizes",
      key: 2,
    },
    {
      label: "Form",
      key: 3,
    },
    {
      label: "Materials",
      key: 4,
    },
    {
      label: "Sex",
      key: 5,
    },
    {
      label: "Designs",
      key: 6,
    },
    {
      label: "Hand Type",
      key: 7,
    },
  ];
  const profileItems = [
    {
      key: "1",
      label: (
        <Link
          className="item-attr-store"
          to="/dashboard/attribute/store/colors"
        >
          Colors
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/dashboard/attribute/store/sizes" className="item-attr-store">
          Sizes
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to="/dashboard/attribute/store/form" className="item-attr-store">
          Form
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
          to="/dashboard/attribute/store/material"
          className="item-attr-store"
        >
          Materials
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link to="/dashboard/attribute/store/sex" className="item-attr-store">
          Sex
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link
          to="/dashboard/attribute/store/design"
          className="item-attr-store"
        >
          Designs
        </Link>
      ),
    },
    {
      key: "7",
      label: (
        <Link
          to="/dashboard/attribute/store/hand-type"
          className="item-attr-store"
        >
          Hand Type
        </Link>
      ),
    },
  ];
  return (
    <>
      <div className="btn-add-dash">
        <Dropdown menu={{ items: profileItems }} className="drops-attr">
          <Button type="primary" icon={<PlusOutlined />} />
        </Dropdown>
      </div>
      <Tabs items={items} onChange={(e) => console.log(e)} />
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default List;
