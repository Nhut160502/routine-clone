import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import Banner from "src/components/Banner";
import Banner from "../components/Banner";
import Breadcrumbs from "../components/Breadcrumbs";
import Description from "../components/Description";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import Toolbar from "../components/Toolbar";

const BestSeller = () => {
  const [data, setData] = useState([]);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 20; i++) setData((pre) => [...pre, i]);
  }, []);

  return (
    <div className="wrapper-layout">
      <Breadcrumbs data={[{ name: "best sellers" }]} />
      <Banner className="banner">
        <img
          src="https://routine.vn/media/catalog/category/best-sellers-bo-suu-tap-quan-ao-thoi-trang-routine-duoc-yeu-thich-nhat-2023.jpg"
          alt=""
        />
      </Banner>
      <div className="content-layout">
        <div className="title-layout">
          <h1>Best Sellers</h1>
        </div>
        <Row>
          <Col sm="3" className="sticky">
            <Filter />
          </Col>
          <Col sm="9">
            <Toolbar getGrid={(value) => setGrid(value)} />
            <div className="content-layout-product">
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

export default BestSeller;
