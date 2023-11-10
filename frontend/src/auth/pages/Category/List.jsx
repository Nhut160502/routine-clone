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
import { activeModal, handleModalDelete } from "src/auth/providers/modalSlice";
import { destroyCategory, getListCategory } from "src/auth/services";
import { columnsCategories } from "src/auth/utils/columns";
import toast from "src/auth/utils/toast";

const List = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const columns = columnsCategories();
  columns.push({
    dataIndex: "_id",
    key: "_id",
    render: (_, record) => {
      return (
        <form className="action">
          <Link to={`/dashboard/category/edit/${record?.slug}`}>
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
        const res = await getListCategory();
        setData(res.data);
        dispatch(disActiveLoading());
      } catch (error) {
        dispatch(disActiveLoading());
        return error;
      }
    };

    fetchData();
  }, [dispatch]);

  const handleDelete = async (id) => {
    dispatch(activeModal());
    const handle = async () => {
      try {
        const res = await destroyCategory(id);
        if (res.success) {
          setData(data.filter((item) => item._id !== id));
          toast.success("Delete Category Successfully!");
        }
      } catch (error) {
        return error;
      }
    };
    dispatch(handleModalDelete(handle));
  };

  return (
    <>
      <div className="btn-add-dash">
        <Link to="/dashboard/category/store">
          <Button type="primary" icon={<PlusOutlined />} />
        </Link>
      </div>
      <Table dataSource={data} columns={columns} rowKey={"_id"} />
    </>
  );
};

export default List;
