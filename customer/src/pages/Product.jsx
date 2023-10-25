import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";

const settings1 = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  vertical: true,
  dots: false,
  autoplay: true,
};

const settings2 = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  autoplay: true,
};

const imgUrl = [
  {
    color: "black",
    url: "https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/1/0/10f23pknw002-black-_1__1_1.jpg",
    urls: [
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_black_1__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_black_2__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_black_3__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_black_4__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_black_5__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/1/0/10f23pknw002-black-_1__2_1_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/1/0/10f23pknw002-black-_2__2_1_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/1/0/10f23pknw002-black-_3__2_1_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/1/0/10f23pknw002-black-_4__2_1_jpg.webp",
    ],
  },
  {
    color: "capuccino",
    url: "https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/1/0/10f23pknw002-brown-_1__2_1.jpg",
    urls: [],
  },
  {
    color: "beige",
    url: "https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/1/0/10f23pknw002-beige-_1__1_1.jpg",
    urls: [
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_beige_1__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_beige_2__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_beige_3__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_beige_4__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_beige_5__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/1/0/10f23pknw002-beige-_1__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/1/0/10f23pknw002-beige-_2__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/1/0/10f23pknw002-beige-_3__2_jpg.webp",
      "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/1/0/10f23pknw002-beige-_3__2_jpg.webp",
    ],
  },
];

const Product = () => {
  return (
    <Wrapper>
      <Row>
        <Col sm="6">
          <Image>
            <Row>
              <Col sm="2">
                <Vertical>
                  {imgUrl.map((item, idx) => (
                    <Slider key={idx} {...settings1}>
                      {item.urls.map((url) => (
                        <div key={url} className="item-vertical">
                          <img src={url} alt="" />
                        </div>
                      ))}
                    </Slider>
                  ))}
                </Vertical>
              </Col>
              <Col sm="10">
                <Horizontal>
                  {imgUrl.map((item, idx) => (
                    <Slider key={idx} {...settings2}>
                      {item.urls.map((url) => (
                        <div key={url} className="item-horizontal">
                          <img src={url} alt="" />
                        </div>
                      ))}
                    </Slider>
                  ))}
                </Horizontal>
              </Col>
            </Row>
          </Image>
        </Col>
        <Col sm="6">
          <div className="name">
            <h1>
              Quần Sweatpants Nữ Nỉ Túi Ốp Trước Ống Rộng Form Wide Leg -
              10F23PKNW002
            </h1>
          </div>
          <div className="price">
            <span>569.000&nbsp;₫</span>
          </div>
          <div className="color"></div>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 50px;
  padding-right: 50px;
`;

const Image = styled.div`
  padding-right: 40px;
`;
const Vertical = styled.div`
  img {
    width: 100%;
  }
`;

const Horizontal = styled.div`
  img {
    width: 100%;
  }
`;
export default Product;
