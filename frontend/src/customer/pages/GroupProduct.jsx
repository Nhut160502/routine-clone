import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Banner from "../components/Banner";
import Breadcrumbs from "../components/Breadcrumbs";
import Description from "../components/Description";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import Toolbar from "../components/Toolbar";

const GroupProduct = () => {
  const [data, setData] = useState([]);
  const [grid, setGrid] = useState(3);

  useEffect(() => {
    for (let i = 0; i < 220; i++) setData((pre) => [...pre, i]);
  }, []);

  return (
    <div className="wrapper-layout">
      <Breadcrumbs data={[{ name: "Thời trang nam" }]} />
      <Banner className="banner">
        <img
          src="https://routine.vn/media/catalog/category/thoi-trang-nam-thuong-hieu-routine-dep-cao-cap-chinh-hang.jpg"
          alt=""
        />
      </Banner>
      <div className="content-layout">
        <div className="title-layout">
          <h1>Thời Trang Nam</h1>
        </div>
        <Row>
          <Col sm="3" className="sticky">
            <Filter />
          </Col>
          <Col sm="9">
            <div className="content-layout-product">
              <Toolbar getGrid={(value) => setGrid(value)} />
              <Row>
                {data.map((item) => (
                  <Col key={item} sm={grid}>
                    <Product />
                  </Col>
                ))}
              </Row>
              <Pagination itemsPerPage={20} items={data} />
            </div>
          </Col>
        </Row>
        <Description />
      </div>
    </div>
  );
};

export default GroupProduct;
