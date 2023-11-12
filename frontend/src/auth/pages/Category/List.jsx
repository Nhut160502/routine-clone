import { PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { destroyCategory, getListCategory } from "src/auth/services";
import { columnsCategories, columsOption } from "src/auth/utils/columns";
import { deleteDataById, getDataApi } from "src/auth/utils/fetchApi";

const List = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const columns = columnsCategories();

  const dataOption = columsOption(
    (id) => deleteDataById(dispatch, destroyCategory, id, data, setData),
    "category",
  );

  columns.push(dataOption);

  useEffect(() => {
    getDataApi(dispatch, getListCategory, setData, true);
  }, [dispatch]);
  columsOption(dispatch);

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
