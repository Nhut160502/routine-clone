import { Table, Tabs } from "antd";
import React from "react";

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
      label: "Waiting For Confirmation",
      key: 1,
    },
    {
      label: "Waiting For Preparation",
      key: 2,
    },
    {
      label: "Shipping",
      key: 3,
    },
    {
      label: "Completed",
      key: 4,
    },
    {
      label: "Canceled",
      key: 5,
    },
  ];
  return (
    <>
      <Tabs items={items} onChange={(e) => console.log(e)} />
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default List;
