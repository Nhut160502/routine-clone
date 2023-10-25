import React, { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "src/components/Banner";
import {
  IconArrowTop,
  IconFilter,
  IconGird3,
  IconGird4,
} from "src/components/Icon";
import Pagination from "src/components/Pagination";
import Product from "src/components/Product";
import { styled } from "styled-components";

const arr = [
  {
    title: "Nhóm",
    content: ["Áo nam", "Quần nam", "Đồ lót nam"],
  },
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

const Category = () => {
  const [optionFilter, setOptionFilter] = useState(["Nhóm"]);
  const [data, setData] = useState([]);
  const [gird, setGird] = useState(3);

  const handleOpenFilter = (title) => {
    if (optionFilter.some((value) => value === title))
      setOptionFilter(optionFilter.filter((value) => value !== title));
    else setOptionFilter((pre) => [...pre, title]);
  };

  useEffect(() => {
    for (let i = 0; i < 430; i++) setData((pre) => [...pre, i]);
  }, []);

  return (
    <Wrapper>
      <Breadcrumbs>
        <li className="home">
          <Link to="/">Trang chủ</Link>
        </li>
        <li>Thời trang nam</li>
      </Breadcrumbs>
      <Banner className="banner">
        <img
          src="https://routine.vn/media/catalog/category/thoi-trang-nam-thuong-hieu-routine-dep-cao-cap-chinh-hang.jpg"
          alt=""
        />
      </Banner>
      <Content>
        <Title>
          <h1>Thời Trang Nam</h1>
        </Title>
        <Row>
          <Col sm="3" className="sticky">
            <SideBar>
              <div className="title">
                <div>
                  <span>Bộ Lọc</span>
                  <IconFilter />
                </div>
              </div>
              <Filter>
                {arr.map((item) => (
                  <div key={item.title} className="item">
                    <div
                      className="heading"
                      onClick={() => handleOpenFilter(item.title)}
                    >
                      <h2>{item.title}</h2>
                      <IconArrowTop className="icon" />
                    </div>
                    <AnimateHeight
                      duration={800}
                      height={
                        optionFilter.some((value) => value === item.title)
                          ? "auto"
                          : 0
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
              </Filter>
            </SideBar>
          </Col>
          <Col sm="9">
            <Main>
              <div className="title">
                <div className="total">
                  <span>
                    <b>431</b> sản phẩm
                  </span>
                </div>
                <div className="display">
                  <span>Hiển thị {gird}</span>
                  <IconGird4 onClick={() => setGird(4)} />
                  <IconGird3 onClick={() => setGird(3)} />
                </div>
                <div className="sorter">
                  <label htmlFor="sorter">Sắp xếp</label>
                  <select id="sorter">
                    <option value="position" selected="selected">
                      Mặc định
                    </option>
                    <option value="name_asc">Thứ tự chữ cái A-Z</option>
                    <option value="name_desc">Thứ tự chữ cái Z-A</option>
                    <option value="price_asc">Giá tăng dần</option>
                    <option value="price_desc">Giá giảm dần</option>
                    <option value="created_at_desc">Sản phẩm mới nhất</option>
                  </select>
                </div>
              </div>
              <div className="content">
                <Row>
                  {data.map((item) => (
                    <Col key={item} sm={gird}>
                      <Product />
                    </Col>
                  ))}
                </Row>
              </div>
              <Pagination itemsPerPage={20} items={data} />
            </Main>
          </Col>
        </Row>
        <Description>
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>
              <strong>
                <span>THỜI TRANG NAM ROUTINE</span>
              </strong>
            </span>
          </h2>
          <p style={{ textAlign: "justify" }}>
            <span
              style={{
                fontFamily: ["arial", "helvetica", "sans-serif"],
                fontSize: "12pt",
              }}
            >
              Routine là <strong>thương hiệu thời trang nam cao cấp</strong>,
              chất lượng và đa dạng từ mẫu mã, màu sắc đến thiết kế. Thương hiệu
              Routine nổi tiếng tại Việt Nam luôn hướng đến thói quen phối đồ
              hàng ngày của nam giới, chính vì vậy các sản phẩm{" "}
              <strong>quần áo nam chính hãng</strong> luôn tạo dấu ấn với thiết
              kế đẹp, ấn tượng, độc quyền, đường nét sắc sảo, chất liệu thân
              thiện với môi trường.
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span
              style={{
                fontFamily: ["arial", "helvetica", "sans-serif"],
                fontSize: "12pt",
              }}
            >
              Bên cạnh phong cách nam thường ngày,{" "}
              <strong>thời trang nam công sở</strong> cũng nhận được sự yêu
              thích rất lớn đến từ Quý khách hàng vì những thiết kế mới lạ, ấn
              tượng, chỉn chu cực phù hợp với các bạn nam văn phòng, đi du lịch,
              đi chơi, hẹn hò,... chứ không chỉ gói gọn để phối đồ đi làm.
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span
              style={{
                fontFamily: ["arial", "helvetica", "sans-serif"],
                fontSize: "12pt",
              }}
            >
              Ngoài ra, với tiêu chí <strong>Good Mood - Good Day</strong>, nên
              các sản phẩm <strong>quần áo nam đẹp</strong> tại Routine cũng có
              những items basic, dễ dàng mix-match, giúp outfit bạn trông lịch
              lãm và phong cách hơn.
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span
              style={{
                fontFamily: ["arial", "helvetica", "sans-serif"],
                fontSize: "12pt",
              }}
            >
              Giờ đây, bạn có thể khám phá những bộ{" "}
              <strong>quần áo nam hàng hiệu</strong>, đẹp nhất, mới nhất, phong
              cách độc đáo tại hệ thống cửa hàng quần áo nam trên toàn Việt Nam,
              những <strong>shop quần áo nam</strong> của Rouitne đã có mặt tại
              những thành phố lớn như Hà Nội, Đà Nẵng, Bình Thuận, Nha Trang, Hồ
              Chí Minh, Cà Mau,...
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span
              style={{
                fontFamily: ["arial", "helvetica", "sans-serif"],
                fontSize: "12pt",
              }}
            >
              <strong>Mua sắm quần áo nam online</strong> tại website Routine sẽ
              được freeship cho đơn hàng từ 399k trên toàn quốc, cùng những ưu
              đãi dành riêng cho thành viên và nhiều chương trình khuyến mãi,
              sale off và đồng giá hấp dẫn khác.
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>&nbsp;</p>
          <p style={{ textAlign: "center" }}>
            <strong>
              <span
                style={{
                  fontFamily: ["arial", "helvetica", "sans-serif"],
                  fontSize: "14pt",
                }}
              >
                GOOD MOOD - GOOD DAY
              </span>
            </strong>
          </p>
        </Description>
      </Content>
    </Wrapper>
  );
};

const Description = styled.div`
  padding: 40px;
  background: #f4f4f4;
  color: #000;
  h2 {
    font-weight: 500;
    line-height: 1.2;
    font-size: 2.8rem;
    margin-top: 2.75rem;
    margin-bottom: 2.2rem;
  }
  p {
    margin-bottom: 15px;
  }
`;

const Main = styled.div`
  padding-left: 14px;
  padding-bottom: 44px;
  .title {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4rem;
    .total {
      position: absolute;
      left: 50%;
      translate: -50%;
      span {
        font-size: 18px !important;
      }
    }
    select {
      background: #fff;
      border: 1px solid #000;
      border-radius: 0;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #000;
      outline: none;
    }
    img {
      cursor: pointer;
    }
  }
`;

const Filter = styled.div`
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

const Wrapper = styled.div`
  position: relative;
  .sticky {
    position: sticky;
    top: 45px;
  }
  .banner {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
const Breadcrumbs = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    font-weight: 400;
    padding: 10px 0;
    font-size: 13px;
    line-height: 15px;
    color: #787878;
    a {
      color: #787878;
    }
  }
  .home {
    a::after {
      content: "/";
      font-size: 13px;
      line-height: 15px;
      margin: 0 4px;
    }
  }
`;

const Content = styled.div`
  margin-top: 50px;
  width: 100%;
  overflow-x: hidden;
  padding: 0 50px;
  position: relative;

  .title {
    margin-bottom: 22px;
    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 15px;
    }
    img {
      border: 1px solid #000;
      padding: 2px;
    }
    span {
      font-size: 15px;
    }
  }
`;
const Title = styled.div`
  h1 {
    text-transform: uppercase;
    margin: 0 0 40px;
    font-size: 32px;
    line-height: 38px;
    display: block;
    text-align: center;
    font-weight: 700;
  }
`;

const SideBar = styled.div``;

export default Category;
