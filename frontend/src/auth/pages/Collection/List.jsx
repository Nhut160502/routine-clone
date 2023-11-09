import {
  DeleteOutlined,
  EllipsisOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  activeLoading,
  disActiveLoading,
} from "src/auth/providers/loadingSlice";
import { activeModal, handleModalDelete } from "src/auth/providers/modalSlice";
import { destroyCollection, getListCollection } from "src/auth/services";
import { columnsGroup } from "src/auth/utils/columns";
import toast from "src/auth/utils/toast";

const List = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const columns = columnsGroup();
  const modal = useSelector((state) => state?.modal);
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
        const res = await getListCollection();
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
        const res = await destroyCollection(id);
        if (res.success) {
          setData(data.filter((item) => item._id !== id));
          toast.success(res.message);
        }
      } catch (error) {
        return error;
      }
    };
    dispatch(handleModalDelete(handle));
  };

  console.log(modal);

  return (
    <>
      <div className="btn-add-dash">
        <Link to="/dashboard/collection/store">
          <Button type="primary" icon={<PlusOutlined />} />
        </Link>
      </div>
      <Table dataSource={data} columns={columns} />
    </>
  );
};
export default List;
