import { PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { destroyCollection, getListCollection } from "src/auth/services";
import { columnsGroup, columsOption } from "src/auth/utils/columns";
import { deleteDataById, getDataApi } from "src/auth/utils/fetchApi";

const List = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const columns = columnsGroup();

  const dataOptions = columsOption(
    (id) => deleteDataById(dispatch, destroyCollection, id, data, setData),
    "collection",
  );

  columns.push(dataOptions);

  useEffect(() => {
    getDataApi(dispatch, getListCollection, setData, true);
  }, [dispatch]);

  return (
    <>
      <div className="btn-add-dash">
        <Link to="/dashboard/collection/store">
          <Button type="primary" icon={<PlusOutlined />} />
        </Link>
      </div>
      <Table dataSource={data} columns={columns} rowKey="_id" />
    </>
  );
};
export default List;
