import React, { Fragment, memo, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Tooltip } from "react-tooltip";
import { PropTypes } from "prop-types";

import { IconHeartBlack } from "./Icon";

const Product = (props) => {
  const { data } = props;
  const [onMouse, setOnmouse] = useState(false);
  const [colorId, setColorId] = useState();

  const handleClickColor = (id) => colorId !== id && setColorId(id);
  return (
    <Wrapper>
      <Image
        onMouseOver={() => setOnmouse(true)}
        onMouseLeave={() => setOnmouse(false)}
      >
        <Link to={`/p/${data?.slug}`}>
          {onMouse ? (
            <img src={data?.media[0]?.gallery[0]} alt="" />
          ) : (
            <img src={data?.media[0]?.gallery[1]} alt="" />
          )}
        </Link>
      </Image>
      <Infor>
        <div className="name">
          <Link to="/p/quan-sweatpants-nu-ni-tui-op-truoc-ong-rong-form-wide-leg">
            {data?.name}
          </Link>
          <IconHeartBlack className="icon-heart" />
        </div>
        <div className="price">
          <span>{data?.price}&nbsp;₫</span>
        </div>
        <Attribute>
          <div className="color">
            {data?.media?.map((item, index) => {
              return (
                <Fragment key={`${item.id}-${index}`}>
                  <div
                    id={`color-${item.color}`}
                    onClick={() => handleClickColor(`color-${item.color}`)}
                    className={
                      colorId === `color-${item.color}` ? "item active" : "item"
                    }
                    style={{
                      backgroundImage: `url(${item.thumbnail})`,
                    }}
                  />
                  <Tooltip
                    anchorSelect={`#color-${item.color}`}
                    variant="light"
                    place="top"
                  >
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${item.thumbnail})`,
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
                {data?.stock.map(
                  (item) =>
                    `color-${item.color._id}` === colorId && (
                      <Fragment key={item._id}>
                        <li
                          id={`size-${item.size._id}`}
                          className={item.qty <= 0 && "disabled"}
                        >
                          {item.size.name}
                        </li>
                        {item.stock > 0 && (
                          <Tooltip
                            anchorSelect={`#size-${item.size._id}`}
                            variant="light"
                            place="top"
                          >
                            {item.size.name}
                          </Tooltip>
                        )}
                      </Fragment>
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

Product.propTypes = {
  data: PropTypes.object,
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
      background-size: cover;
      background-position: center;
      cursor: pointer;
      border: 1px solid transparent;

      &.active {
        border-color: #5d5d5d;
      }
    }
    .image {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
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

export default memo(Product);
