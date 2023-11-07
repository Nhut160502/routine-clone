import { PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
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
  return (
    <>
      <div className="btn-add-dash">
        <Link to="/dashboard/category-child/store">
          <Button type="primary" icon={<PlusOutlined />} />
        </Link>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default List;
