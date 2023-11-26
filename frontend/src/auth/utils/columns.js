import { DeleteOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const columsOption = (handleDelete, path) => {
  return {
    dataIndex: "_id",
    key: "_id",
    render: (_, record) => {
      return (
        <form className="action">
          <Link to={`/dashboard/${path}/edit/${record?.slug}`}>
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
  };
};

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

export const columnsProduct = () => {
  return [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Group Product",
      dataIndex: "groupProduct",
      render: (value) => value?.name,
    },
    {
      title: "Collection",
      dataIndex: "collection",
      render: (value) => value?.name,
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (value) => value?.name,
    },
    {
      title: "Caregory Child",
      dataIndex: "categoryChild",
      render: (value) => value?.name,
    },
    {
      title: "Colors",
      dataIndex: "colors",
      render: (colors) => colors?.length + " colors",
    },
    {
      title: "Sizes",
      dataIndex: "sizes",
      render: (colors) => colors?.length + " sizes",
    },
    {
      title: "Image",
      dataIndex: "media",
      render: (media, record) => (
        <Link to={`/dashboard/product/edit/${record.slug}`}>
          <img
            className="product-img"
            src={media[0]?.thumbnail}
            alt={record.name}
          />
        </Link>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Sold",
      dataIndex: "sold",
    },
  ];
};
