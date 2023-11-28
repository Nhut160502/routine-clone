import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import Description from "../components/Description";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import Toolbar from "../components/Toolbar";
import { useParams } from "react-router-dom";
import { findByCollection, showCollection } from "../services";
import { useDispatch } from "react-redux";
import { activeLoading, disActiveLoading } from "../providers/loadingSlice";

const Collection = () => {
  const dispatch = useDispatch();
  const [colleciton, setCollection] = useState({});
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [grid, setGrid] = useState(3);

  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(activeLoading());
      try {
        const res = await showCollection(slug);

        if (res.success) {
          setCollection(res.data);
          const pro = await findByCollection(res.data._id);
          if (pro.success) {
            setData(pro.data);
            setTotal(pro.total);
          }
        }
        dispatch(disActiveLoading());
      } catch (error) {
        dispatch(disActiveLoading());
        return error;
      }
    };
    fetchData();
  }, [slug, dispatch]);

  return (
    <div className="wrapper-layout">
      <Breadcrumbs data={["Bộ sưu tập", colleciton?.name]} />
      <div className="content-layout">
        <div className="title-layout">
          <h1>{colleciton?.name}</h1>
        </div>
        <Row>
          <Col sm="3" className="sticky">
            <Filter />
          </Col>
          <Col sm="9">
            <Toolbar total={total} getGrid={(e) => setGrid(e)} />
            <Row className="content-layout-product">
              {data.map((item) => (
                <Col key={item} sm={grid}>
                  <Product data={item} />
                </Col>
              ))}
            </Row>
            <Pagination itemsPerPage={20} items={data} />
          </Col>
        </Row>
        <Description />
      </div>
    </div>
  );
};

export default Collection;
