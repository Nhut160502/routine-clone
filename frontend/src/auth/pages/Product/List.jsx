import {
  DeleteOutlined,
  EllipsisOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { getListProduct } from "src/auth/services";
import { columnsProduct } from "src/auth/utils/columns";

const List = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const columns = columnsProduct();
  columns.push({
    dataIndex: "_id",
    key: "_id",
    render: (_, record) => {
      return (
        <form className="action">
          <Link to={`/dashboard/collection/edit/${record?.slug}`}>
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

  useEffect(() => {
    const fetchData = async () => {
      dispatch(activeLoading());
      try {
        const res = await getListProduct();
        res.success && setData(res.data);
        dispatch(disActiveLoading());
      } catch (error) {
        dispatch(disActiveLoading());
        return error;
      }
    };
    fetchData();
  }, [dispatch]);

  const handleDelete = (id) => {};

  return (
    <>
      <div className="btn-add-dash">
        <Link to="/dashboard/product/store">
          <Button type="primary" icon={<PlusOutlined />} />
        </Link>
      </div>
      <Table dataSource={data} columns={columns} rowKey="_id" />
    </>
  );
};

export default List;
