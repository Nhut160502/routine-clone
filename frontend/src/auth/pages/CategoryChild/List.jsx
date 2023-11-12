import { PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { destroyCategoryChild, getListCategoryChild } from "src/auth/services";
import { columnsCategoryChild, columsOption } from "src/auth/utils/columns";
import { deleteDataById, getDataApi } from "src/auth/utils/fetchApi";

const List = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const columns = columnsCategoryChild();

  const dataOptions = columsOption(
    (id) => deleteDataById(dispatch, destroyCategoryChild, id, data, setData),
    "category-child",
  );

  columns.push(dataOptions);

  useEffect(() => {
    getDataApi(dispatch, getListCategoryChild, setData, true);
  }, [dispatch]);

  return (
    <>
      <div className="btn-add-dash">
        <Link to="/dashboard/category-child/store">
          <Button type="primary" icon={<PlusOutlined />} />
        </Link>
      </div>
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default List;
