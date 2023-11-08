import { Image } from "antd";
import React from "react";

export const columnsGroup = (id) => {
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Banner",
      dataIndex: "banner",
      key: "banner",
      render: (url) => <Image className="image-custom" src={url} />,
    },
    {
      title: "Created",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
};
