import React, { useState } from "react";
import { styled } from "styled-components";
import { IconArrowTop, IconFilter } from "./Icon";
import AnimateHeight from "react-animate-height";
import { Link } from "react-router-dom";

const arr = [
  {
    title: "Thiết kế",
    content: [
      "Trơn",
      "Phối màu",
      "Kẻ sọc",
      "Caro",
      "Họa tiết in",
      "Họa tiết thêu",
      "Hoa văn",
      "Jean rách",
    ],
  },
  {
    title: "FORM",
    content: [
      "Slim",
      "Slim Crop",
      "Fitted",
      "Regular",
      "Loose",
      "Oversize",
      "Relax",
      "Straight",
      " Straight Crop",
      "Skinny",
      "Skinny Crop",
      "Carrot",
      "Jogger",
      "Boxer",
      "Boxy",
      "Cargo",
      "Wide Leg",
    ],
  },
  {
    title: "IỚI TÍNH",
    content: ["Nam", "Unisex"],
  },
  {
    title: "Nhóm sản phẩm",
    content: [
      "Áo Sát Nách",
      "Áo Polo",
      "Áo Thun",
      "Áo Sơ Mi",
      "Áo Len",
      "Áo Khoác",
      "Áo Vest",
      "Áo Hoodie/Sweater",
      "Quần Jean",
      "Quần Kaki",
      "Quần Vải",
      "Quần Nỉ/Jogger",
      "Quần Short",
      "Underwear",
    ],
  },
  {
    title: "Kiểu tay",
    content: ["Tay lửng", "Tay dài", "Tay ngắn", "Tay bo", "Sát nách"],
  },
];

const Filter = () => {
  const [optionFilter, setOptionFilter] = useState([]);

  const handleOpenFilter = (title) => {
    if (optionFilter.some((value) => value === title))
      setOptionFilter(optionFilter.filter((value) => value !== title));
    else setOptionFilter((pre) => [...pre, title]);
  };

  return (
    <Wrapper>
      <div className="title">
        <span>Bộ Lọc</span>
        <IconFilter />
      </div>
      {arr.map((item) => (
        <div key={item.title} className="item">
          <div className="heading" onClick={() => handleOpenFilter(item.title)}>
            <h2>{item.title}</h2>
            <IconArrowTop className="icon" />
          </div>
          <AnimateHeight
            duration={800}
            height={
              optionFilter.some((value) => value === item.title) ? "auto" : 0
            }
          >
            <div className="content">
              <ul>
                {item.content.map((content, idx) => (
                  <li key={idx}>
                    <Link>
                      <div className="checkbox"></div>
                      <span>{content}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateHeight>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 15px;
    img {
      border: 1px solid #000;
      padding: 2px;
    }
    span {
      font-size: 15px;
    }
  }
  .item {
    border-bottom: 1px solid #d6d6d6;
    padding: 10px 0;
    .heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      text-transform: uppercase;
      font-weight: 700;
      cursor: pointer;
    }
    .content {
      a {
        display: flex;
        gap: 1rem;
        align-items: center;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #000;
        padding: 9px 0;
        font-size: 13px;
        .checkbox {
          border: 1px solid #9b9b9b;
          width: 18px;
          height: 18px;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Filter;
