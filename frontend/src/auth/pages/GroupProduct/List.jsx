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
import { useDispatch } from "react-redux";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { activeModal, handleModalDelete } from "src/auth/providers/modalSlice";

const GroupProduct = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const columns = columnsGroup();
  columns.push({
    dataIndex: "_id",
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

  const handleDelete = async (id) => {
    dispatch(activeModal());
    const handle = async () => {
      try {
        const res = await destroyGroupProduct(id);
        setData(data.filter((item) => item._id !== id));
        dispatch(disActiveLoading());
        toast.success(res?.message);
      } catch (error) {
        return error;
      }
    };
    dispatch(handleModalDelete(handle));
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(activeLoading());
      try {
        const res = await getListGroupProduct();
        setData(res.data);
        dispatch(disActiveLoading());
      } catch (error) {
        dispatch(disActiveLoading());
        return error;
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="btn-add-dash">
        <Link to="/dashboard/group-product/store">
          <Button type="primary" icon={<PlusOutlined />} />
        </Link>
      </div>
      <Table dataSource={data} columns={columns} rowKey="_id" />
    </>
  );
};

export default GroupProduct;
