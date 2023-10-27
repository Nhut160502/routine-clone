import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import Quantity from "src/components/Quantity";
import Button from "src/components/Button";
import { IconHeartBlack } from "src/components/Icon";
import Feature from "src/components/Feature";
import AnimateHeight from "react-animate-height";

const settings1 = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  dots: false,
  autoplay: true,
  focusOnSelect: true,
};

const settings2 = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  autoplay: true,
};

const data = {
  name: "Quần Sweatpants Nữ Nỉ Túi Ốp Trước Ống Rộng Form Wide Leg -10F23PKNW002",
  price: "569.000",
  media: [
    {
      color: {
        id: "color1",
        name: "black",
      },
      thumbbail:
        "https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/1/0/10f23pknw002-black-_1__1_1.jpg",
      gallery: [
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
      color: {
        id: "color2",
        name: "capuccino",
      },
      thumbbail:
        "https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/1/0/10f23pknw002-brown-_1__2_1.jpg",
      gallery: [
        "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_brown_1__3_jpg.webp",
        "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_brown_5__3_jpg.webp",
        "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_brown_3__3_jpg.webp",
        "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-nu-10f23pknw002_brown_4__3_jpg.webp",
        "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/1/0/10f23pknw002-brown-_1__3_1_jpg.webp",
        "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/1/0/10f23pknw002-brown-_2__3_1_jpg.webp",
        "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/1/0/10f23pknw002-brown-_4__3_1_jpg.webp",
      ],
    },
    {
      color: {
        id: "color3",
        name: "beige",
      },
      thumbbail:
        "https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/1/0/10f23pknw002-beige-_1__1_1.jpg",
      gallery: [
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
  ],
  attr: [
    {
      color: {
        id: "color1",
        name: "black",
      },
      sizes: [
        {
          id: "size1",
          name: "xs",
          stock: 10,
        },
        {
          id: "size2",
          name: "s",
          stock: 10,
        },
        {
          id: "size3",
          name: "m",
          stock: 10,
        },
        {
          id: "size4",
          name: "l",
          stock: 10,
        },
        {
          id: "size5",
          name: "xl",
          stock: 0,
        },
        {
          id: "size6",
          name: "xxl",
          stock: 0,
        },
      ],
    },
    {
      color: {
        id: "color2",
        name: "capuccino",
      },
      sizes: [
        {
          id: "size1",
          name: "xs",
          stock: 10,
        },
        {
          id: "size2",
          name: "s",
          stock: 10,
        },
        {
          id: "size3",
          name: "m",
          stock: 10,
        },
        {
          id: "size4",
          name: "l",
          stock: 10,
        },
        {
          id: "size5",
          name: "xl",
          stock: 0,
        },
        {
          id: "size6",
          name: "xxl",
          stock: 0,
        },
      ],
    },
    {
      color: {
        id: "color3",
        name: "beige",
      },
      sizes: [
        {
          id: "size1",
          name: "xs",
          stock: 0,
        },
        {
          id: "size2",
          name: "s",
          stock: 10,
        },
        {
          id: "size3",
          name: "m",
          stock: 10,
        },
        {
          id: "size4",
          name: "l",
          stock: 10,
        },
        {
          id: "size5",
          name: "xl",
          stock: 0,
        },
        {
          id: "size6",
          name: "xxl",
          stock: 0,
        },
      ],
    },
  ],
  form: "Wide Leg",
  material: "Nỉ",
  design: "Trơn",
  sex: "Nữ",
  groups: "Quần Nỉ/Jogger",
};

const Product = () => {
  const [colorsSelected, setColorsSelected] = useState("color1");
  const [sizeSelected, setSizeSelected] = useState();
  const [showDesc, setShowDesc] = useState(false);
  const [slider2, setSlider2] = useState(null);

  console.log(showDesc);

  useEffect(() => {
    const size = data.attr
      .find((item) => item.color.id === colorsSelected)
      .sizes.find((size) => size.stock > 0).id;
    console.log(size);
    setSizeSelected(size);
  }, [colorsSelected]);
  return (
    <Wrapper>
      <Row>
        <Col sm="6">
          <Image>
            <Row>
              <Col sm="2">
                <Vertical>
                  {data.media.map(
                    (item, idx) =>
                      item.color.id === colorsSelected && (
                        <Slider key={idx} {...settings1} asNavFor={slider2}>
                          {item.gallery.map((gall, key) => (
                            <div key={key} className="item-vertical">
                              <img src={gall} alt="" />
                            </div>
                          ))}
                        </Slider>
                      ),
                  )}
                </Vertical>
              </Col>
              <Col sm="10">
                <Horizontal>
                  {data.media.map(
                    (item, idx) =>
                      item.color.id === colorsSelected && (
                        <Slider
                          key={idx}
                          {...settings2}
                          ref={(slider) => setSlider2(slider)}
                        >
                          {item.gallery.map((gall, key) => (
                            <div key={key} className="item-horizontal">
                              <img src={gall} alt="" />
                            </div>
                          ))}
                        </Slider>
                      ),
                  )}
                </Horizontal>
              </Col>
            </Row>
          </Image>
        </Col>
        <Col sm="6">
          <Infor>
            <div className="name">
              <h1>{data.name}</h1>
            </div>
            <div className="price">
              <span>{data.price}&nbsp;₫</span>
            </div>
            <div className="color">
              <div className="color-option span-option">
                <span>Chọn màu sắc: </span>
                <span className="selected">
                  {
                    data.attr.find((item) => item.color.id === colorsSelected)
                      .color.name
                  }
                </span>
              </div>
              <div className="color-content">
                {data.media.map((item, idx) => (
                  <div
                    onClick={() => setColorsSelected(item.color.id)}
                    key={idx}
                    className={
                      item.color.id === colorsSelected
                        ? "color-item active"
                        : "color-item"
                    }
                    style={{ backgroundImage: `url(${item.thumbbail})` }}
                  />
                ))}
              </div>
            </div>
            <div className="size">
              <div className="size-option span-option">
                <span>Chọn size: </span>
                <span className="selected">
                  {
                    data.attr
                      .find((item) => item.color.id === colorsSelected)
                      .sizes.find((size) => size.id === sizeSelected)?.name
                  }
                </span>
              </div>
              <div className="size-content">
                {data.attr.map(
                  (item) =>
                    item.color.id === colorsSelected &&
                    item.sizes.map((size) => (
                      <button
                        onClick={() => setSizeSelected(size.id)}
                        key={size.id}
                        className={
                          (size.stock <= 0 && "size-item disabled") ||
                          (size.id === sizeSelected && "size-item active") ||
                          "size-item"
                        }
                      >
                        {size.name}
                      </button>
                    )),
                )}
              </div>
            </div>
            <div className="quantity">
              <div className="quantity-option span-option">
                <span>Chọn số lượng: </span>
                <span className="selected">1</span>
              </div>
              <div className="quantity-content"></div>
            </div>
            <Option>
              <Quantity className="qty" getValue={(e) => console.log(e)} />
              <Button border>Mua ngay</Button>
              <IconHeartBlack className="icon" />
            </Option>
            <div className="stock">
              <span>
                còn lại <strong>5</strong> sản phẩm
              </span>
            </div>
            <Feature />
            <Attribute>
              <div className="caption">
                <b>ĐẶC ĐIỂM NỔI BẬT</b>
              </div>
              <table>
                <tbody>
                  <tr>
                    <th className="col">Form</th>
                    <td className="col">{data.form}</td>
                  </tr>
                  <tr>
                    <th className="col">Chất liệu</th>
                    <td className="col">{data.material}</td>
                  </tr>
                  <tr>
                    <th className="col">Thiết kế</th>
                    <td className="col">{data.design}</td>
                  </tr>
                  <tr>
                    <th className="col">Giới tính</th>
                    <td className="col">{data.sex}</td>
                  </tr>
                  <tr>
                    <th className="col">Nhóm sản phẩm</th>
                    <td className="col">{data.groups}</td>
                  </tr>
                </tbody>
              </table>
            </Attribute>
            <Descripton>
              <div className="caption">
                THÔNG TIN CHI TIẾT <b>{data.name}</b>
              </div>
              <AnimateHeight
                duration={800}
                height={showDesc === true ? "auto" : 247}
              >
                <div className="content">
                  <p className="page-title" style={{ textAlign: "justify" }}>
                    <b>
                      <span className="base" data-ui-id="page-title-wrapper">
                        Quần Sweatpants Nữ Nỉ Túi Ốp Trước Ống Rộng Form Wide
                        Leg - 10F23PKNW002&nbsp;
                      </span>
                    </b>
                    <span className="base" data-ui-id="page-title-wrapper">
                      mang thiết kế đơn giản, sành điệu kết hợp cùng chất vải ấm
                      áp:
                    </span>
                  </p>
                  <ul style={{ textAlign: "justify" }}>
                    <li className="page-title">
                      <span className="base" data-ui-id="page-title-wrapper">
                        Chất vải nỉ mềm mại, giữ ấm tốt và có độ bền cao
                      </span>
                    </li>
                    <li className="page-title">
                      <span className="base" data-ui-id="page-title-wrapper">
                        Form quần ống rộng thoải mái, dễ dàng che đi khuyết điểm
                      </span>
                    </li>
                    <li className="page-title">
                      <span className="base" data-ui-id="page-title-wrapper">
                        Lưng quần thiết kế lưng thun kèm theo dây tiện dụng, dễ
                        dàng thay đổi độ rộng
                      </span>
                    </li>
                    <li className="page-title">
                      <span className="base" data-ui-id="page-title-wrapper">
                        Túi quần may ẩn đa năng
                      </span>
                    </li>
                    <li className="page-title">
                      <span className="base" data-ui-id="page-title-wrapper">
                        Tag Be Together bé xinh, tạo điểm nhấn cho quần
                      </span>
                    </li>
                    <li className="page-title">
                      <span className="base" data-ui-id="page-title-wrapper">
                        Sử dụng diện đi chơi, đi học hay đi làm đều thích
                        hợp.&nbsp;
                      </span>
                    </li>
                  </ul>
                  <p style={{ textAlign: "justify" }}>&nbsp;</p>
                  <p style={{ textAlign: "justify" }}>
                    <span className="base" data-ui-id="page-title-wrapper">
                      <img
                        src="https://routine.vn/media/amasty/webp/wysiwyg/Mo_ta_sp_1/Mo-ta-1016-10F23PKNW002-01_jpg.webp"
                        data-amsrc="https://routine.vn/media/amasty/webp/wysiwyg/Mo_ta_sp_1/Mo-ta-1016-10F23PKNW002-01_jpg.webp"
                        alt="Thông tin sản phẩm 10F23PKNW002"
                        width="1150"
                        data-loaded="true"
                      />
                    </span>
                  </p>
                </div>
              </AnimateHeight>
              <div className="btn-option">
                <Button
                  transparent
                  outline
                  onClick={() => setShowDesc(!showDesc)}
                >
                  {showDesc ? "Thu Gọn" : "Xem thêm"}
                </Button>
              </div>
            </Descripton>
          </Infor>
        </Col>
      </Row>
      <div className="reviews">
        <button>Gửi đánh giá của bạn</button>
      </div>
    </Wrapper>
  );
};

const Infor = styled.div`
  .quantity {
    margin: 29px 0 0;
  }
  .color {
    .color-content {
      display: flex;
    }
    .color-item {
      width: 48px !important;
      height: 64px !important;
      background-position: center;
      background-repeat: no-repeat;
      background-size: initial;
      margin: 15px 15px 0 0;
      border: 1px solid #dadada;
      cursor: pointer;
      &.active {
        border: 1px solid #474747;
      }
    }
  }
  .stock {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    margin-top: 10px;
    color: #4f4f4f;
    margin-bottom: 44px;
  }
  .name {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: none;
    margin: 20px 0;
    text-transform: capitalize;
  }
  .price {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000;
    margin: 20px 0;
  }
  .span-option {
    font-size: 15px;
    color: #000;
    font-weight: 400;
    line-height: 18px;
    .selected {
      font-weight: 700;
      text-transform: uppercase;
      margin-left: 15px;
    }
  }
  .size {
    margin-top: 25px;
    .size-item {
      text-align: center;
      border: 1px solid #bfbfbf;
      background-color: #fff;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #000;
      padding: 14px 4px;
      height: 48px;
      min-width: 48px;
      text-transform: uppercase;
      margin: 15px 15px 0 0;
      position: relative;

      &.active {
        background-color: #000;
        color: #fff;
      }
      &.disabled {
        color: #e5e5e5;
        cursor: default;
        &::before {
          position: absolute;
          left: 50%;
          top: 50%;
          translate: -50%;
          transform: 30px 20px;
          background: #e5e5e5;
          content: "";
          width: 66px;
          height: 2px;
          transform: rotate(135deg);
        }
      }
    }
  }
`;

const Descripton = styled.div`
  font-size: 15px;
  position: relative;
  .content {
  }
  .btn-option {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  p {
    margin-bottom: 20px;
  }
  img {
    width: 100%;
  }
  ul {
    padding-inline-start: 40px;
    li {
      list-style-type: disc;
      font-weight: 400;
      font-size: 15px;
      line-height: 1.27;
    }
  }
`;

const Attribute = styled.div`
  margin-bottom: 20px;
  margin-top: 30px;
  table {
    width: 100%;
  }
  tbody {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    tr {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    th {
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #000;
      padding: 5px 0;
      display: block;
      &::before {
        content: "";
        width: 3px;
        height: 3px;
        display: inline-block;
        background-color: #000;
        vertical-align: middle;
        margin-right: 11px;
        border-radius: 100%;
      }
    }
    td {
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #000;
      padding: 5px 0;
      display: block;
    }
  }
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  align-items: center;
  margin-top: 18px;
  .qty {
    margin-right: 30px;
  }
  button {
    margin-right: 30px;
    width: 100%;
    height: 46px;
  }
  .icon {
    width: 40px;
    height: 48px;
  }
`;

const Wrapper = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 44px;
  .caption {
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    position: relative;
    padding-left: 22px;
    margin-bottom: 16px;

    &::before {
      content: "";
      background: #d40f0f;
      width: 12px;
      height: 12px;
      display: block;
      position: absolute;
      left: 0;
      top: 4px;
    }
  }
  .reviews {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 60px;
    padding-bottom: 25px;
    border-bottom: 1px solid #d6d6d6;
    button {
      background: #e3b386;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.1em;
      color: #000;
      padding: 12px;
      text-transform: uppercase;
      min-width: 220px;
      border-radius: 0;
      border: 1px solid #e3b386;
    }
  }
`;

const Image = styled.div`
  padding-right: 40px;
`;
const Vertical = styled.div`
  img {
    cursor: pointer;
    width: 100%;
  }
`;

const Horizontal = styled.div`
  img {
    cursor: pointer;
    width: 100%;
  }
`;
export default Product;
