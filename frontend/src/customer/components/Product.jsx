import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { IconHeartBlack } from "./Icon";
import { Tooltip } from "react-tooltip";

const colors = [
  {
    id: "color-1",
    name: "Black",
    url1: "https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/1/0/10f23pknw002-black-_1__1_1.jpg",
    url2: "https://routine.vn/media/catalog/product/cache/d6ec37e98cd5482d3197d29f912fea48/1/0/10f23pknw002-black-_1__1_1.jpg",
  },
  {
    id: "color-2",
    name: "Cappuccino",
    url1: "https://routine.vn/media/catalog/product/cache/8ee0d41a0522a757b6f54f9321607fdf/1/0/10f23pknw002-brown-_1__2_1.jpg",
    url2: "https://routine.vn/media/catalog/product/cache/d6ec37e98cd5482d3197d29f912fea48/1/0/10f23pknw002-brown-_1__2_1.jpg",
  },
  {
    id: "color-3",
    name: "Beige",
    url1: "https://routine.vn/media/catalog/product/cache/d6ec37e98cd5482d3197d29f912fea48/1/0/10f23pknw002-beige-_1__1_1.jpg",
    url2: "https://routine.vn/media/catalog/product/cache/d6ec37e98cd5482d3197d29f912fea48/1/0/10f23pknw002-beige-_1__1_1.jpg",
  },
];

const sizes = [
  {
    colorId: "color-1",
    id: "size-1",
    name: "XS",
    stock: 10,
  },
  {
    colorId: "color-1",
    id: "size-2",
    name: "S",
    stock: 10,
  },
  {
    colorId: "color-1",
    id: "size-3",
    name: "M",
    stock: 10,
  },
  {
    colorId: "color-1",
    id: "size-4",
    name: "L",
    stock: 10,
  },
  {
    colorId: "color-1",
    id: "size-5",
    name: "XL",
    stock: 0,
  },
  {
    colorId: "color-1",
    id: "size-6",
    name: "XXL",
    stock: 0,
  },

  {
    colorId: "color-2",
    id: "size-7",
    name: "XS",
    stock: 10,
  },
  {
    colorId: "color-2",
    id: "size-8",
    name: "S",
    stock: 10,
  },
  {
    colorId: "color-2",
    id: "size-9",
    name: "M",
    stock: 10,
  },
  {
    colorId: "color-2",
    id: "size-10",
    name: "L",
    stock: 10,
  },
  {
    colorId: "color-2",
    id: "size-11",
    name: "XL",
    stock: 0,
  },
  {
    colorId: "color-2",
    id: "size-12",
    name: "XXL",
    stock: 0,
  },
  {
    colorId: "color-3",
    id: "size-13",
    name: "S",
    stock: 0,
  },
  {
    colorId: "color-3",
    id: "size-14",
    name: "M",
    stock: 0,
  },
  {
    colorId: "color-3",
    id: "size-15",
    name: "L",
    stock: 10,
  },
  {
    colorId: "color-3",
    id: "size-16",
    name: "XL",
    stock: 0,
  },
  {
    colorId: "color-3",
    id: "size-17",
    name: "XXL",
    stock: 0,
  },
];

const Product = (props) => {
  const [onMouse, setOnmouse] = useState(false);
  const [colorId, setColorId] = useState();

  const handleClickColor = (id) => colorId !== id && setColorId(id);
  return (
    <Wrapper>
      <Image
        onMouseOver={() => setOnmouse(true)}
        onMouseLeave={() => setOnmouse(false)}
      >
        <Link to="/p/quan-sweatpants-nu-ni-tui-op-truoc-ong-rong-form-wide-leg">
          {onMouse ? (
            <img
              src="https://routine.vn/media/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-nu-10f23pknw002_brown_5__1.jpg"
              alt=""
            />
          ) : (
            <img
              src="https://routine.vn/media/catalog/product/cache/d0cf4470db45e8932c69fc124d711a7e/q/u/quan-nu-10f23pknw002_brown_1__1.jpg"
              alt=""
            />
          )}
        </Link>
      </Image>
      <Infor>
        <div className="name">
          <Link to="/p/quan-sweatpants-nu-ni-tui-op-truoc-ong-rong-form-wide-leg">
            Quần Sweatpants Nữ Nỉ Túi Ốp Trước Ống Rộng Form Wide Leg -
            10F23PKNW002
          </Link>
          <IconHeartBlack className="icon-heart" />
        </div>
        <div className="price">
          <span>569.000&nbsp;₫</span>
        </div>
        <Attribute>
          <div className="color">
            {colors.map((item, index) => {
              return (
                <Fragment key={`${item.id}-${index}`}>
                  <div
                    id={item.id}
                    onClick={() => handleClickColor(item.id)}
                    className={colorId === item.id ? "item active" : "item"}
                    style={{
                      backgroundImage: `url(${item.url1})`,
                    }}
                  />
                  <Tooltip
                    anchorSelect={`#${item.id}`}
                    variant="light"
                    place="top"
                  >
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${item.url2})`,
                      }}
                    />
                    <span>{item.name}</span>
                  </Tooltip>
                </Fragment>
              );
            })}
          </div>
          {colorId && (
            <div className="size">
              <span>Chọn size để thêm vào giỏ hàng</span>
              <ul>
                {sizes.map(
                  (item) =>
                    item.colorId === colorId && (
                      <>
                        <li
                          id={item.id}
                          className={item.stock <= 0 && "disabled"}
                        >
                          {item.name}
                        </li>
                        {item.stock > 0 && (
                          <Tooltip
                            anchorSelect={`#${item.id}`}
                            variant="light"
                            place="top"
                          >
                            {item.name}
                          </Tooltip>
                        )}
                      </>
                    ),
                )}
              </ul>
            </div>
          )}
        </Attribute>
      </Infor>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 45px;
`;
const Image = styled.div`
  position: relative;
  padding-top: 150%;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 10px;
  }
`;
const Infor = styled.div`
  margin-top: 15px;
  position: relative;
  .name {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    gap: 1rem;
    line-height: 21px;
    a {
      font-size: 13px;
      text-transform: capitalize;
    }

    .icon-heart {
      width: 28px;
      height: 24px;
      min-width: 28px;
    }
  }
  .price {
    span {
      font-size: 18px;
      line-height: 21px;
      font-weight: 700;
    }
  }
`;

const Attribute = styled.div`
  .color {
    display: flex;
    text-align: center;
    .item {
      width: 24px !important;
      height: 24px !important;
      margin: 10px 10px 0 0;
      padding: 0;
      border-radius: 2px;
      min-width: 24px;
      background-size: initial;
      background-position: center;
      cursor: pointer;
      border: 2px solid transparent;

      &.active {
        border-color: #5d5d5d;
      }
    }
    .image {
      background-position: center;
      background-repeat: no-repeat;
      background-size: initial;
      width: 110px;
      height: 165px;
    }
    span {
      text-transform: uppercase;
      color: #000 !important;
    }
  }
  .size {
    padding: 15px 15px 2px;
    margin-bottom: 15px;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 100%;
    background: rgba(255, 255, 255, 0.8);
    span {
      text-transform: uppercase;
      font-size: 12px;
    }
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        min-width: 24px !important;
        height: 24px !important;
        margin: 0 3px 10px;
        color: #000;
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        text-align: center;
        cursor: pointer;

        &.disabled {
          color: #bcbcbc;
        }
      }
    }
  }
`;

export default Product;
