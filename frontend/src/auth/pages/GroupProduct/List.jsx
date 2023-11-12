import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { destroyGroupProduct, getListGroupProduct } from "src/auth/services";
import { columnsGroup, columsOption } from "src/auth/utils/columns";
import { useDispatch } from "react-redux";
import { deleteDataById, getDataApi } from "src/auth/utils/fetchApi";

const GroupProduct = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const columns = columnsGroup();

  const dataOptions = columsOption(
    (id) => deleteDataById(dispatch, destroyGroupProduct, id, data, setData),
    "group-product",
  );

  columns.push(dataOptions);

  useEffect(() => {
    getDataApi(dispatch, getListGroupProduct, setData, true);
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
