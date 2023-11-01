import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import Description from "../components/Description";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import Toolbar from "../components/Toolbar";

const Collection = () => {
  const [data, setData] = useState([]);
  const [grid, setGrid] = useState(3);

  useEffect(() => {
    for (let i = 0; i < 20; i++) setData((pre) => [...pre, i]);
  }, []);

  return (
    <div className="wrapper-layout">
      <Breadcrumbs data={[{ name: "Bộ Sưu Tập" }]} />
      <div className="content-layout">
        <div className="title-layout">
          <h1>COUPLE COLLECTION</h1>
        </div>
        <Row>
          <Col sm="3" className="sticky">
            <Filter />
          </Col>
          <Col sm="9">
            <Toolbar getGrid={(e) => setGrid(e)} />
            <Row className="content-layout-product">
              {data.map((item) => (
                <Col key={item} sm={grid}>
                  <Product />
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