import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { styled } from "styled-components";
import Quantity from "./Quantity";
import { Link } from "react-router-dom";
import { IconArrowDown } from "./Icon";
import { Tooltip } from "react-tooltip";

const colors = [
  {
    id: "color-1",
    name: "black",
    url: "https://routine.vn/media/catalog/product/cache/d6ec37e98cd5482d3197d29f912fea48/1/0/10f23pknw002-black-_1__1_1.jpg",
  },
  {
    id: "color-2",
    name: "cappucino",
    url: "https://routine.vn/media/catalog/product/cache/d6ec37e98cd5482d3197d29f912fea48/1/0/10f23pknw002-brown-_1__2_1.jpg",
  },
  {
    id: "color-3",
    name: "beige",
    url: "https://routine.vn/media/catalog/product/cache/d6ec37e98cd5482d3197d29f912fea48/1/0/10f23pknw002-beige-_1__1_1.jpg",
  },
];
const FavouriteItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <Wrapper>
      <Row>
        <Col sm="4">
          <Image>
            <img
              src="https://routine.vn/media/catalog/product/cache/9eb3bb38848a3053921b46e4936c5b10/q/u/quan-nu-10f23pknw002_beige_1__4.jpg"
              alt=""
            />
          </Image>
        </Col>
        <Col sm="8">
          <Infor>
            <div className="name">
              <Link>
                Quần Sweatpants Nữ Nỉ Túi Ốp Trước Ống Rộng Form Wide Leg -
                10F23PKNW002
              </Link>
            </div>
            <div className="attribute">
              <div className="item" id="color" onClick={() => setIsOpen(true)}>
                <span className="title">Màu sắc</span>
                <IconArrowDown />
              </div>
              {isOpen && (
                <Tooltip
                  anchorSelect="#color"
                  variant="light"
                  place="bottom"
                  clickable
                  afterShow={() => setIsOpen(true)}
                  afterHide={() => setIsOpen(false)}
                  openOnClick
                >
                  <ul>
                    {colors.map((color) => (
                      <li key={color.id} onClick={() => setIsOpen(false)}>
                        <img src={color.url} alt="" />
                        <span>{color.name}</span>
                      </li>
                    ))}
                  </ul>
                </Tooltip>
              )}
              <div className="item" id="size">
                <span className="title">Size</span>
                <IconArrowDown />
                <Tooltip anchorSelect="#size" variant="light" place="bottom">
                  ok
                </Tooltip>
              </div>
            </div>
            <Quantity small />
            <div className="price">
              <span>569.000&nbsp;₫</span>
            </div>
          </Infor>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Infor = styled.div`
  padding: 10px 0 15px;
  .name {
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    color: #000;
    margin: 0 0 10px;
    text-transform: capitalize;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    min-height: 38px;
  }
  .attribute {
    margin-bottom: 10px;
    display: flex;
    gap: 1.5rem;
    .item {
      cursor: pointer;
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    ul {
      padding: 20px;
      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        text-transform: uppercase;
        font-size: 14px;
        cursor: pointer;
        img {
          width: 26px;
        }
      }
    }
  }
  .price {
    font-weight: 700;
    font-size: 16px;
    line-height: 17px;
    color: #000;
    margin-top: 10px;
  }
`;

const Wrapper = styled.div``;
const Image = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export default FavouriteItem;
