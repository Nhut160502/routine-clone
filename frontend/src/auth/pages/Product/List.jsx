import { PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { destroyProduct, getListProduct } from "src/auth/services";
import { columnsProduct, columsOption } from "src/auth/utils/columns";
import { deleteDataById, getDataApi } from "src/auth/utils/fetchApi";

const List = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const columns = columnsProduct();

  const dataOptions = columsOption(
    (id) => deleteDataById(dispatch, destroyProduct, id, data, setData),
    "product",
  );

  columns.push(dataOptions);

  useEffect(() => {
    getDataApi(dispatch, getListProduct, setData, true);
  }, [dispatch]);

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
