import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import SidebarNews from "../components/SidebarNews";
import { styled } from "styled-components";

const populars = [
  {
    img: "https://routine.vn/media/amasty/webp/blog/cache/460x360/magefan_blog/goi-y-phoi-do-thoi-trang-cong-so-mua-thu-2023_jpg.webp",
    title: "Gợi ý phối đồ thời trang công sở mùa thu hot nhất 2023",
    desc: "Các bạn văn phòng đã cập nhật những xu hướng thời trang mới nhất cho mùa thu đông năm nay chưa? Nếu chưa thì hãy cùng Routine xem ngay những gợi ý phối đồ thời trang công sở mùa thu cực hot năm 2023 dành cho cả nam và nữ trong bài viết sao nhé!",
  },
  {
    img: "https://routine.vn/media/amasty/webp/blog/cache/460x360/magefan_blog/phong-cach-hiphop-lan-song-thoi-trang-dam-chat-rieng_1_jpg.webp",
    title:
      "Phong cách hiphop - làn sóng thời trang đậm chất riêng, hiện đại năm 2023",
    desc: "Phong cách hiphop  trong những năm gần đây không còn đơn giản là một trào lưu, mà đang dần trở thành một lối sống, nét văn hóa thời trang đặc trưng của giới trẻ ngày nay. Hãy cùng Routine khám phá phong cách đầy cá tính này ngay trong bài viết hôm nay nhé!",
  },
  {
    img: "https://routine.vn/media/amasty/webp/blog/cache/460x360/magefan_blog/coffee-lovers-collection-dong-t-shirt-mang-phong-cach-song-moi_jpg.webp",
    title: "Coffee Lovers Collection | Dòng T - shirt mang phong cách sống mới",
    desc: "Đi cùng phát triển kinh tế, nhiều công nghệ dệt may mới, hiện đại ra đời với nhiều đặc tính vượt trội hơn hẳn. Và trong bài viết ngày hôm nay, Routine cũng xin giới thiệu đến các bạn bộ sưu tập từ vải cà phê đạt chuẩn chất lượng mang tên Coffee Lovers Collection. ",
  },
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

const News = () => {
  return (
    <Wrapper>
      <Breadcrumbs data={[{ name: "Tin thời trang" }]} />
      <div className="title-page">
        <h1>Tin thời trang</h1>
      </div>
      <Popular>
        <div className="title">
          <h2>Mới nhất - Hot nhất - Đọc nhiều</h2>
        </div>
        <Row>
          {populars.map((popular, idx) => (
            <Col key={idx} sm="4">
              <Row className="item">
                <Col sm="4" className="image">
                  <img src={popular.img} alt="" />
                </Col>
                <Col sm="8" className="detail">
                  <div className="count">{idx + 1}</div>
                  <Link>{popular.title}</Link>
                  <p>{popular.desc}</p>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Popular>
      <Content>
        <Row>
          <Col sm="8">
            <List>
              <Title>
                <h2>Bài viết</h2>
              </Title>
              <ul className="post-content">
                {list.map((item, idx) => (
                  <li key={idx} className="post-item">
                    <Link className="post-image">
                      <img src={item.img} alt="" />
                    </Link>
                    <div className="post-detail">
                      <div className="post-tag">
                        {item.tag.map((tag, tagidx) => (
                          <Link key={tagidx}>{tag}</Link>
                        ))}
                      </div>
                      <Link className="post-title">{item.title}</Link>
                      <div className="post-date">
                        <span>{item.createAt}</span>
                      </div>
                      <p className="post-desc">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </List>
          </Col>
          <Col sm="4">
            <SidebarNews />
          </Col>
        </Row>
      </Content>
    </Wrapper>
  );
};

const List = styled.div`
  padding-right: 50px;
  .post-content .post-item:first-child {
    width: 100%;
    position: relative;
    margin-bottom: -1rem;
    .post-image::before {
      content: "";
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 65.61%,
        rgba(0, 0, 0, 0.6) 100%
      );
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .post-detail {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px;
      z-index: 2;
      padding: 56px 40px;
      .post-title,
      .post-date {
        color: #fff;
      }
      .post-title {
        font-size: 24px;
        line-height: 28px;
      }
      .post-desc {
        display: none;
      }
    }
  }

  //ul
  .post-content {
    //li
    display: flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    gap: 2rem;

    .post-item {
      margin-bottom: 30px;
      width: calc(50% - 1rem);
      .post-image {
        display: block;
        position: relative;
        height: 0;
        padding-top: 66.667%;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 20px;
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
    }
  }
`;

const Title = styled.div`
  h2 {
    margin: 0 0 28px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
  }
`;
const Content = styled.div`
  padding-left: 50px;
  padding-right: 50px;
`;

const Popular = styled.div`
  padding: 40px 20px;
  background-color: #fff3ed;
  padding-right: 50px;
  padding-left: 50px;
  margin-bottom: 40px;
  .title {
    h2 {
      display: block;
      margin: 0 0 30px;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      color: #000;
      text-align: center;
    }
  }
  .item {
    .image {
      img {
        width: 100%;
      }
    }
    .count {
      position: absolute;
      left: 0;
      width: 33px;
      height: 33px;
      background: #000;
      line-height: 33px;
      display: block;
      border-radius: 100%;
      font-weight: 700;
      font-size: 24px;
      text-align: center;
      color: #fff;
      position: absolute;
      top: 0;
    }
    .detail {
      position: relative;
      padding-left: 44px;
      min-height: 34px;

      > a {
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #000;
        display: block;
        margin: 0 0 10px;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        min-height: 44px;
      }
      > p {
        font-weight: 400;
        font-size: 15px;
        line-height: 19px;
        font-weight: 400;
        font-size: 15px;
        line-height: 19px;
        margin-top: 10px;
        line-clamp: 3;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
      }
    }
  }
`;
const Wrapper = styled.div`
  .title-page {
    h1 {
      margin-top: 40px;
      text-align: center;
      font-weight: 700;
      font-size: 28px;
      line-height: 33px;
      color: #282828;
      text-transform: uppercase;
      margin-bottom: 35px;
    }
  }
`;
export default News;
