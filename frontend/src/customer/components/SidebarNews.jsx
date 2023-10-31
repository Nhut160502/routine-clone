import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const tags = [
  "Xu Hướng Thời Trang",
  "Mix & Match",
  "Khám Phá",
  "Khuyến Mãi",
  "Sự Kiện",
  "Chất Liệu",
  "New Collection",
  "Form Dáng",
  "Cách Bảo Quản",
];
const list = [
  {
    img: "https://routine.vn/media/magefan_blog/recap-dong-ao-thun-lam-tu-soi-scafe-dja-tro-lai-trong-su-kien-coffee-lovers-series-2.jpg",
    title:
      "[RECAP] Dòng Áo Thun Làm Từ Sợi S.Cafe Đã Trở Lại Trong Sự Kiện Coffee Lovers Series 2",
    tag: ["Sự Kiện"],
    desc: "Sự kiện ra mắt BST Coffee Lovers Series 2 đã chính thức mang dòng áo thun được làm từ sợi S.Cafe quay trở lại với những thiết kế hiện đại, phong cách hơn, mang tính thời trang và tính ứng dụng cao đúng với những gì mà bộ sưu tập lần này muốn truyền tải. ",
    createAt: "30.10.2023",
  },
  {
    img: "https://routine.vn/media/amasty/webp/magefan_blog/9-loai-vai-may-ao-thun-cotton_jpg.webp",
    title: "9 loại vải cotton may áo thun và mẹo bảo quản bền đẹp như mới",
    tag: ["Khám Phá"],
    desc: "Áo thun cotton vô cùng quen thuộc với các tín đồ thời trang thế nhưng bạn có thật sự hiểu hết về items này? Hãy cùng Routine khám phá về áo thun cotton qua bài viết dưới đây!</span>",
    createAt: "23.10.2023",
  },
  {
    img: "https://routine.vn/media/amasty/webp/magefan_blog/coffee-lovers-series-2_1_jpg.webp",
    title:
      "COFFEE LOVERS SERIES 2 - Chậm rãi khám phá thế giới bên ngoài để tìm thấy con người thật sự bên trong mỗi chúng ta",
    tag: ["Sự Kiện"],
    desc: "Nhờ sự ra mắt thành công tốt đẹp của Coffee Lovers Collection vào tháng 5 vừa qua, Routine đã có thể mang những câu chuyện về Văn hóa cà phê - Phong cách sống - Thời trang đến gần với tất cả mọi người, đặc biệt là giới trẻ ngày nay. Chính sự yêu thương và ủng hộ của các bạn đã tạo một động lực to lớn giúp Routine ấp ủ và tiếp tục phát triển sâu hơn những câu chuyện theo định hướng này và đưa Coffee Lovers Series 2 trở lại với chủ đề 'Slower ways to see the world'.",
    createAt: "23.10.2023",
  },
  {
    img: "https://routine.vn/media/amasty/webp/magefan_blog/vietnam-cotton-day-fashion-show-2023-with-routine_jpg.webp",
    title: "VietNam Cotton Day Fashion Show 2023 With Routine",
    tag: ["Sự Kiện"],
    desc: "Ngày 29.09.2023 vừa qua, VietNam Cotton Day Fashion Show 2023 do COTTON USA kết hợp cùng Hiệp hội Dệt May Việt Nam (VITAS) tổ chức đã được diễn ra rất thành công với sự góp mặt của những thương hiệu nổi tiếng trong nước và cả quốc tế. Tại đây, thương hiệu thời trang Routine đã mang đến sàn runway của Cotton Day 2023 những thiết kế được làm từ sợi bông tự nhiên mang vẻ đẹp hiện đại, đầy phong cách trong BST Thu - Đông mới nhất.",
    createAt: "23.10.2023",
  },
  {
    img: "https://routine.vn/media/amasty/webp/magefan_blog/goi-y-phoi-do-thoi-trang-cong-so-mua-thu-2023_jpg.webp",
    title: "Các kiểu áo sơ mi linen hot nhất trong năm 2023",
    tag: ["Xu Hướng Thời Trang", "Mix & Match"],
    desc: "Xem ngay toplist các kiểu áo sơ mi linen cực hot và được các bạn trẻ yêu thích nhất trong năm 2023 tại Routine, cùng một số mẹo bảo quản quần áo đũi như mới trong bài viết sau đây nhé!",
    createAt: "23.10.2023",
  },
];
const SidebarNews = () => {
  return (
    <Wrapper>
      <Tags>
        <Title>
          <h2>Tag bài viết</h2>
        </Title>
        <ul>
          {tags.map((tag, idx) => (
            <li key={idx}>
              <Link>{tag}</Link>
            </li>
          ))}
        </ul>
      </Tags>
      <New>
        <Title>
          <h2>Bài viết mới</h2>
        </Title>
        <ul>
          {list.map((item, idx) => (
            <li key={idx}>
              <Row>
                <Col sm="4">
                  <img src={item.img} alt="" />
                </Col>
                <Col sm="8">
                  <Link className="post-title">{item.title}</Link>
                  <sapn className="post-date">{item.createAt}</sapn>
                </Col>
              </Row>
            </li>
          ))}
        </ul>
      </New>
      <Feature>
        <Title>
          <h2>Bài viết nổi bật</h2>
        </Title>
        <ul>
          {list.map((item, idex) => (
            <li key={idex}>
              <Link className="image">
                <img src={item.img} alt="" />
              </Link>
              <div className="post-detail">
                <div className="post-tag">
                  {item.tag.map((tag, idx) => (
                    <Link key={idx}>{tag}</Link>
                  ))}
                </div>
                <Link className="post-title">{item.title}</Link>
                <div className="post-date">
                  <span>{item.createAt}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Feature>
    </Wrapper>
  );
};
const Feature = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(1, minmax(1, 1fr));
    gap: 1.5rem;
    li {
      position: relative;
      .image {
        display: block;
        height: 0;
        padding-top: 66.667%;
        border-radius: 5px !important;
        overflow: hidden;
        &::before {
          content: "";
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 39.76%,
            rgba(0, 0, 0, 0.6) 97.58%
          );
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        img {
          display: block;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
          border-radius: 5px;
        }
      }
      .post-detail {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px;
        z-index: 2;
        padding: 30px;
        .post-title,
        .post-date {
          color: #fff;
        }
        .post-title {
          font-size: 18px;
          line-height: 22px;
          min-height: 44px;
        }
        .post-desc {
          display: none;
        }
      }
    }
  }
`;

const New = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(1, minmax(1, 1fr));
    gap: 1.5rem;
    li {
      img {
        width: 100%;
      }
    }
  }
`;

const Tags = styled.div`
  margin-bottom: 20px;
  ul {
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    gap: 1rem;
    li {
      color: #000;
      display: block;
      background: #fff;
      border: 1px solid #bfbfbf;
      padding: 10px 20px;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      a {
        font-size: 14px;
        text-transform: capitalize;
      }
    }
  }
`;
const Wrapper = styled.div``;
const Title = styled.div`
  h2 {
    margin: 0 0 28px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
  }
`;

export default SidebarNews;
