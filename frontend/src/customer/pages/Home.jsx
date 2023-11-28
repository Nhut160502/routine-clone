import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Product from "../components/Product";
import Slibar from "../components/Slider";
import { styled } from "styled-components";
// import { useSelector } from "react-redux";

const Home = () => {
  // useSelector((state) => console.log(state));
  return (
    <>
      <Slibar />
      <BannerImage>
        <Row>
          <Col sm="4">
            <Link to="/">
              <div className="item">
                <img
                  src="https://routine.vn/media/bst-new-arrivals-nam.jpg"
                  alt=""
                />
                <Button className="btn" outline border white>
                  Xem Thêm
                </Button>
              </div>
            </Link>
          </Col>
          <Col sm="4">
            <Link to="/">
              <div className="item">
                <img
                  src="https://routine.vn/media/wysiwyg/Banner-Wedding-session.jpg"
                  alt=""
                />
                <Button className="btn" outline border white>
                  Xem Thêm
                </Button>
              </div>
            </Link>
          </Col>
          <Col sm="4">
            <Link to="/">
              <div className="item">
                <img
                  src="https://routine.vn/media/bst-new-arrivals-nu.jpg"
                  alt=""
                />
                <Button className="btn" outline border white>
                  Xem Thêm
                </Button>
              </div>
            </Link>
          </Col>
        </Row>
      </BannerImage>
      <BannerVideo>
        <img
          src="https://routine.vn/media/wysiwyg/Couple_Collection.jpg"
          alt=""
        />
      </BannerVideo>
      <NewColecction>
        <Row>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
          <Col sm="3">
            <Product />
          </Col>
        </Row>
        <div className="btn">
          <Button outline border>
            Xem Thêm
          </Button>
        </div>
      </NewColecction>
      <Promotion>
        <div className="title">
          <h2>Mua vest tặng áo</h2>
        </div>
        <div className="content">
          <Row>
            <Col sm="3">
              <Product />
            </Col>
            <Col sm="3">
              <Product />
            </Col>
            <Col sm="3">
              <Product />
            </Col>
            <Col sm="3">
              <Product />
            </Col>
          </Row>
          <div className="btn">
            <Button outline border>
              Xem Thêm
            </Button>
          </div>
        </div>
      </Promotion>
      <BannerImage style={{ padding: "35px" }}>
        <Row>
          <Col sm="6">
            <Link>
              <div className="item">
                <img
                  className="img"
                  src="https://routine.vn/media/thoi-trang-nam.jpg"
                  alt=""
                />
                <Button className="btn" outline border white>
                  Xem Thêm
                </Button>
              </div>
            </Link>
          </Col>
          <Col sm="6">
            <Link>
              <div className="item">
                <img
                  className="img"
                  src="https://routine.vn/media/thoi-trang-nu.jpg"
                  alt=""
                />
                <Button className="btn" outline border white>
                  Xem Thêm
                </Button>
              </div>
            </Link>
          </Col>
        </Row>
      </BannerImage>

      <BannerImage style={{ padding: "35px" }}>
        <Row>
          <Col sm="4">
            <Link>
              <div className="item">
                <img
                  className="img"
                  src="https://routine.vn/media/Couple_Collection.jpg"
                  alt=""
                />
                <Button className="btn" outline border white>
                  Xem Thêm
                </Button>
              </div>
            </Link>
          </Col>
          <Col sm="4">
            <Link>
              <div className="item">
                <img
                  className="img"
                  src="https://routine.vn/media/Winter_Collection.jpg"
                  alt=""
                />
                <Button className="btn" outline border white>
                  Xem Thêm
                </Button>
              </div>
            </Link>
          </Col>
          <Col sm="4">
            <Link>
              <div className="item">
                <img
                  className="img"
                  src="https://routine.vn/media/Flannel_Collection.jpg"
                  alt=""
                />
                <Button className="btn" outline border white>
                  Xem Thêm
                </Button>
              </div>
            </Link>
          </Col>
        </Row>
      </BannerImage>
    </>
  );
};

const BannerImage = styled.div`
  padding: 35px 35px 0;
  img {
    width: 100%;
    border-radius: 10px !important;
  }
  .item {
    position: relative;
  }
  button {
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    bottom: 25px;

    &:hover {
      color: #fff !important;
      border-color: #000 !important;
      background-color: #000 !important;
    }
  }
`;

const BannerVideo = styled.div`
  margin-top: 50px;
  img {
    width: 100%;
  }
`;

const NewColecction = styled.div`
  overflow-x: hidden;
  margin-top: 50px;
  padding: 0 60px;
  margin-bottom: 50px;

  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Promotion = styled.div`
  padding: 0 60px;
  margin-bottom: 50px;
  .title {
    text-align: center;
    margin-bottom: 30px;
    h2 {
      display: inline;
      text-transform: uppercase;
      font-size: 36px;
      font-weight: 700;
      position: relative;
      z-index: 1;
      color: #000;
      &::after {
        content: "";
        height: 10px;
        left: -17px;
        right: -17px;
        background: #e1e1e1;
        position: absolute;
        bottom: 3px;
        z-index: -1;
      }
    }
  }
  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Home;
