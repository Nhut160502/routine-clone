import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Breadcrumbs from "../components/Breadcrumbs";
import Description from "../components/Description";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import Toolbar from "../components/Toolbar";
import { styled } from "styled-components";

const child = [
  {
    name: "áo polo nam",
    url: "https://routine.vn//media/catalog/category/ao-polo-nam_1.jpg",
  },
  {
    name: "áo thun nam",
    url: "https://routine.vn//media/catalog/category/ao-thun-nam_1.jpg",
  },
  {
    name: "áo sơ mi nam",
    url: "https://routine.vn//media/catalog/category/ao-so-mi-nam_1.jpg",
  },
  {
    name: "áo khoác nam",
    url: "https://routine.vn//media/catalog/category/ao-khoac-nam_1.jpg",
  },
  {
    name: "Áo Vest - Blazer Nam",
    url: "https://routine.vn//media/catalog/category/ao-vest-blazer-nam_1.jpg",
  },
  {
    name: "áo len nam",
    url: "https://routine.vn//media/catalog/category/ao-len-nam.jpg",
  },
  {
    name: "áo hoodie nam",
    url: "https://routine.vn//media/catalog/category/ao-hoodie-nam_1.jpg",
  },
];

const Category = () => {
  const [data, setData] = useState([]);
  const [grid, setGrid] = useState(3);

  useEffect(() => {
    for (let i = 0; i < 20; i++) setData((pre) => [...pre, i]);
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
      <CategoryChildren>
        <ul>
          {child.map((item) => (
            <li key={item.name}>
              <Link to="/c/thoi-trang-nam/ao-nam/ao-polo-nam">
                <div className="image">
                  <img src={item.url} alt={item.name} />
                </div>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </CategoryChildren>
      <div className="content-layout">
        <div className="title-layout">
          <h1>Áo Nam</h1>
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

const CategoryChildren = styled.div`
  margin-bottom: 30px;
  margin-top: 50px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      width: 140px;
      margin: 0 0 20px;
      padding: 0 10px;
      .image {
        padding-top: 133.3333%;
        padding-top: 133.33%;
        height: 0;
        position: relative;
        display: block;
      }
      span {
        font-size: 13px;
        margin-top: 10px;
        text-transform: uppercase;
        display: block;
      }
    }
    img {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      max-height: 100%;
    }
  }
`;

export default Category;
