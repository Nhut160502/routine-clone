import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import {
  DeleteOutlined,
  EllipsisOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { destroyGroupProduct, getListGroupProduct } from "src/auth/services";
import { columnsGroup } from "src/auth/utils/columns";
import toast from "src/auth/utils/toast";

const GroupProduct = () => {
  const [data, setData] = useState([]);
  const columns = columnsGroup();
  columns.push({
    dataIndex: "_id",
    key: "_id",
    render: (_, record) => {
      return (
        <form className="action">
          <Link to={`/dashboard/group-product/edit/${record?.slug}`}>
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
  });

  const handleDelete = async (id) => {
    try {
      const res = await destroyGroupProduct(id);
      setData(data.filter((item) => item._id !== id));
      toast.success(res?.message);
    } catch (error) {
      return error;
    }
  };

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
