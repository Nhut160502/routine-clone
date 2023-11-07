import { Button, Image, Table } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getListGroupProduct } from "src/auth/services";

const GroupProduct = () => {
  const [data, setData] = useState([]);
  const columns = [
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getListGroupProduct();
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="btn-add-dash">
        <Link to="/dashboard/group-product/store">
          <Button type="primary" icon={<PlusOutlined />} />
        </Link>
      </div>
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default GroupProduct;
