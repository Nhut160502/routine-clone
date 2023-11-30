import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import Quantity from "../components/Quantity";
import Button from "../components/Button";
import { IconHeartBlack } from "../components/Icon";
import Feature from "../components/Feature";
import AnimateHeight from "react-animate-height";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activeLoading, disActiveLoading } from "../providers/loadingSlice";
import { showProduct } from "../services";

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

const Product = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [colorsSelected, setColorsSelected] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [showDesc, setShowDesc] = useState(false);
  const [slider2, setSlider2] = useState(null);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState();
  const [showFixTop, setShowFixtop] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(activeLoading());
      try {
        const res = await showProduct(slug);
        res.success && setData(res.data);
        setColorsSelected(res?.data?.media[0]?.color._id);
        setPrice(res.data.price - res.data.price * (res.data.sale / 100));
        dispatch(disActiveLoading());
      } catch (error) {
        dispatch(disActiveLoading());
        return error;
      }
    };

    fetchData();
  }, [slug, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 380 && setShowFixtop(true);
      window.scrollY < 380 && setShowFixtop(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showFixTop]);

  const handleSelectedSize = (id) => {
    const { qty } = data?.stock.find(
      (item) => item.color._id === colorsSelected && item.size._id === id,
    );
    if (qty <= 0) return;
    else setSizeSelected(id);
  };

  const SizeContent = () => {
    return (
      <div className="size-content">
        {data?.sizes?.map((size) => {
          let cls = "size-item";
          size._id === sizeSelected && (cls = "size-item active");
          const { qty } = data?.stock.find(
            (item) =>
              item.color._id === colorsSelected && item.size._id === size._id,
          );
          qty <= 0 && (cls = "size-item disabled");

          return (
            <button
              onClick={() => handleSelectedSize(size._id)}
              key={size._id}
              className={cls}
            >
              {size.name}
            </button>
          );
        })}
      </div>
    );
  };

  const ColorContent = () => {
    return (
      <div className="color-content">
        {data?.media?.map((item, idx) => (
          <div
            onClick={() => setColorsSelected(item.color._id)}
            key={idx}
            className={
              item.color._id === colorsSelected
                ? "color-item-product active"
                : "color-item-product"
            }
            style={{ backgroundImage: `url(${item.thumbnail})` }}
          />
        ))}
      </div>
    );
  };
  return (
    <>
      <FixTop className={showFixTop && "active"}>
        <Row>
          <Col sm="4" className="fixtop-left">
            <div className="image">
              {data?.media && <img src={data?.media[0]?.thumbnail} alt="" />}
            </div>
            <div className="infor">
              <h1 className="name">{data?.name}</h1>
              <div className="price-container">
                <h1 className="price">{price}&nbsp;₫</h1>
                <h1 className="price-sale">
                  <div className="old-price">{price}&nbsp;₫</div>
                  <div className="percent-price">
                    <span>{data?.sale}%</span>
                  </div>
                </h1>
              </div>
            </div>
          </Col>
          <Col sm="8" className="fixtop-right">
            <div className="option">
              <div className="option-title">
                <span>Chọn màu:</span>
              </div>
              <div className="option-content">
                <ColorContent />
              </div>
            </div>
            <div className="option">
              <div className="option-title">
                <span>Chọn size:</span>
              </div>
              <div className="option-content">
                <SizeContent />
              </div>
            </div>
            <div className="option">
              <div className="option-title">
                <span>Chọn SL:</span>
              </div>
              <Option className="fixtop-option">
                <Quantity className="qty" getValue={(e) => setQty(e)} />
                <Button border>Thêm vào giỏ hàng</Button>
              </Option>
            </div>
          </Col>
        </Row>
      </FixTop>
      <Wrapper>
        <Row>
          <Col sm="6">
            <Image>
              <Row>
                <Col sm="2">
                  <Vertical>
                    {data?.media?.map(
                      (item, idx) =>
                        item.color._id === colorsSelected && (
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
                    {data?.media?.map(
                      (item, idx) =>
                        item.color._id === colorsSelected && (
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
                <h1>{data?.name}</h1>
              </div>
              <div className="price">
                <span>{price}&nbsp;₫</span>
              </div>
              <div className="color">
                <div className="color-option span-option">
                  <span>Chọn màu sắc: </span>
                  <span className="selected">
                    {colorsSelected &&
                      data?.media?.find(
                        (item) => item.color._id === colorsSelected,
                      ).color.name}
                  </span>
                </div>
                <ColorContent />
              </div>
              <div className="size">
                <div className="size-option span-option">
                  <span>Chọn size: </span>
                  <span className="selected">
                    {sizeSelected &&
                      data.sizes.find((size) => size._id === sizeSelected)
                        ?.name}
                  </span>
                </div>
                <SizeContent />
              </div>
              <div className="quantity">
                <div className="quantity-option span-option">
                  <span>Chọn số lượng: </span>
                  <span className="selected">{qty}</span>
                </div>
                <div className="quantity-content"></div>
              </div>
              <Option>
                <Quantity className="qty" getValue={(e) => setQty(e)} />
                <Button border>Mua ngay</Button>
                <IconHeartBlack className="icon" />
              </Option>
              <div className="stock">
                {colorsSelected && sizeSelected && (
                  <span>
                    còn lại:{" "}
                    <strong>
                      {
                        data?.stock?.find(
                          (item) =>
                            item.color._id === colorsSelected &&
                            item.size._id === sizeSelected,
                        )?.qty
                      }
                    </strong>{" "}
                    sản phẩm
                  </span>
                )}
              </div>
              <Feature />
              <Attribute>
                <div className="caption">
                  <b>ĐẶC ĐIỂM NỔI BẬT</b>
                </div>
                <table>
                  <tbody>
                    {data?.attribute?.form && (
                      <tr>
                        <th className="col">Form</th>
                        <td className="col">{data?.attribute?.form?.name}</td>
                      </tr>
                    )}
                    {data?.attribute?.material && (
                      <tr>
                        <th className="col">Chất liệu</th>
                        <td className="col">
                          {data?.attribute?.material?.name}
                        </td>
                      </tr>
                    )}
                    {data?.attribute?.design && (
                      <tr>
                        <th className="col">Thiết kế</th>
                        <td className="col">{data?.attribute?.design?.name}</td>
                      </tr>
                    )}
                    {data?.attribute?.collarType && (
                      <tr>
                        <th className="col">Kiểu cổ</th>
                        <td className="col">
                          {data?.attribute?.collarType?.name}
                        </td>
                      </tr>
                    )}
                    {data?.attribute?.handType && (
                      <tr>
                        <th className="col">Kiểu tay</th>
                        <td className="col">
                          {data?.attribute?.handType?.name}
                        </td>
                      </tr>
                    )}
                    {data?.attribute?.sex && (
                      <tr>
                        <th className="col">Giới tính</th>
                        <td className="col">{data?.attribute?.sex?.name}</td>
                      </tr>
                    )}
                    <tr>
                      <th className="col">Nhóm sản phẩm</th>
                      <td className="col">{data?.categoryChild?.name}</td>
                    </tr>
                  </tbody>
                </table>
              </Attribute>
              {data?.description !== "null" && data?.descImage?.length > 0 && (
                <Descripton>
                  <div className="caption">
                    THÔNG TIN CHI TIẾT <b>{data.name}</b>
                  </div>
                  <AnimateHeight
                    duration={800}
                    height={showDesc === true ? "auto" : 247}
                  >
                    <div className="content">
                      <p
                        className="page-title"
                        style={{ textAlign: "justify" }}
                      >
                        <b>
                          <span
                            className="base"
                            data-ui-id="page-title-wrapper"
                          >
                            Quần Sweatpants Nữ Nỉ Túi Ốp Trước Ống Rộng Form
                            Wide Leg - 10F23PKNW002&nbsp;
                          </span>
                        </b>
                        <span className="base" data-ui-id="page-title-wrapper">
                          mang thiết kế đơn giản, sành điệu kết hợp cùng chất
                          vải ấm áp:
                        </span>
                      </p>
                      <ul style={{ textAlign: "justify" }}>
                        <li className="page-title">
                          <span
                            className="base"
                            data-ui-id="page-title-wrapper"
                          >
                            Chất vải nỉ mềm mại, giữ ấm tốt và có độ bền cao
                          </span>
                        </li>
                        <li className="page-title">
                          <span
                            className="base"
                            data-ui-id="page-title-wrapper"
                          >
                            Form quần ống rộng thoải mái, dễ dàng che đi khuyết
                            điểm
                          </span>
                        </li>
                        <li className="page-title">
                          <span
                            className="base"
                            data-ui-id="page-title-wrapper"
                          >
                            Lưng quần thiết kế lưng thun kèm theo dây tiện dụng,
                            dễ dàng thay đổi độ rộng
                          </span>
                        </li>
                        <li className="page-title">
                          <span
                            className="base"
                            data-ui-id="page-title-wrapper"
                          >
                            Túi quần may ẩn đa năng
                          </span>
                        </li>
                        <li className="page-title">
                          <span
                            className="base"
                            data-ui-id="page-title-wrapper"
                          >
                            Tag Be Together bé xinh, tạo điểm nhấn cho quần
                          </span>
                        </li>
                        <li className="page-title">
                          <span
                            className="base"
                            data-ui-id="page-title-wrapper"
                          >
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
              )}
            </Infor>
          </Col>
        </Row>
        <div className="reviews">
          <button>Gửi đánh giá của bạn</button>
        </div>
      </Wrapper>
    </>
  );
};

const FixTop = styled.div`
  display: none;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  top: 0;
  position: fixed;
  z-index: 99999;
  height: 121px;
  background-color: #fff;
  padding: 15px 50px;
  justify-content: space-between;
  box-shadow: 0px -4px 4px rgba(199, 199, 199, 0.25);

  &.active {
    display: block;
  }

  .fixtop-left {
    display: flex;
    .image {
      width: 54px;
      margin-right: 15px;
      img {
        width: 100%;
      }
    }
    .infor {
      line-height: 1.5;

      h1 {
        display: block;
        color: #000;

        &.name {
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          text-transform: capitalize;
          line-height: 1.5;
        }
      }
    }
  }
  .fixtop-right {
    display: flex;
    justify-content: right;
    .option {
      padding-right: 5px;
      padding-bottom: 5px;
      margin-right: 20px;
      padding-left: 20px;
      + .option {
        border-left: 1px solid #d0d0d0;
      }
      .fixtop-option {
        button {
          line-height: 1;
          max-width: 160px;
          padding: 25px 30px;
          margin-right: 0;
        }
      }
      .option-title {
        font-size: 14px;
      }

      .option-content {
        display: flex;
        .color-item-product {
          width: 36px !important;
          height: 48px !important;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          margin: 15px 15px 0 0;
          border: 1px solid #dadada;
          cursor: pointer;
          &.active {
            border: 1px solid #474747;
          }
        }
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
    }
  }
`;

const Infor = styled.div`
  .quantity {
    margin: 29px 0 0;
  }
  .color {
    .color-content {
      display: flex;
    }
    .color-item-product {
      width: 48px !important;
      height: 64px !important;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
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
      text-transform: capitalize;
    }
  }
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  align-items: center;
  margin-top: 18px;
  gap: 2rem;
  .qty {
    margin-right: 30px;
  }
  button {
    margin-right: 30px;
    width: 100%;
    height: 46px;
  }
  .icon {
    width: 40px !important;
    height: 48px !important;
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
