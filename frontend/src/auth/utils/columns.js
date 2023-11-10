import { Image } from "antd";
import React from "react";

export const columnsGroup = () => {
  return [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Shortcut",
      dataIndex: "shortcut",
    },
    {
      title: "Banner",
      dataIndex: "banner",
      render: (url) => <Image className="image-custom" src={url} />,
    },
    {
      title: "Created",
      dataIndex: "createdAt",
    },
  ];
};

export const columnsCategories = () => {
  return [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Group Product",
      dataIndex: "groupProduct",
      render: (data) => data?.name,
    },
    {
      title: "Banner",
      dataIndex: "banner",
      render: (url) => <Image className="image-custom" src={url} />,
    },
    {
      title: "Created",
      dataIndex: "createdAt",
    },
  ];
};

export const columnsCategoryChild = () => {
  return [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (data) => data?.name,
    },
    {
      title: "Created",
      dataIndex: "createdAt",
    },
  ];
};

export const columnsAttribute = () => {
  return [
    {
      title: "Name",
      dataIndex: "name",
    },
  ];
};
