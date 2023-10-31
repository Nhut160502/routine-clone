import React from "react";
import { styled } from "styled-components";

const Description = (props) => {
  return (
    <Wrapper>
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
          Routine là <strong>thương hiệu thời trang nam cao cấp</strong>, chất
          lượng và đa dạng từ mẫu mã, màu sắc đến thiết kế. Thương hiệu Routine
          nổi tiếng tại Việt Nam luôn hướng đến thói quen phối đồ hàng ngày của
          nam giới, chính vì vậy các sản phẩm
          <strong>quần áo nam chính hãng</strong> luôn tạo dấu ấn với thiết kế
          đẹp, ấn tượng, độc quyền, đường nét sắc sảo, chất liệu thân thiện với
          môi trường.
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>
        <span
          style={{
            fontFamily: ["arial", "helvetica", "sans-serif"],
            fontSize: "12pt",
          }}
        >
          Bên cạnh phong cách nam thường ngày,
          <strong>thời trang nam công sở</strong> cũng nhận được sự yêu thích
          rất lớn đến từ Quý khách hàng vì những thiết kế mới lạ, ấn tượng, chỉn
          chu cực phù hợp với các bạn nam văn phòng, đi du lịch, đi chơi, hẹn
          hò,... chứ không chỉ gói gọn để phối đồ đi làm.
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>
        <span
          style={{
            fontFamily: ["arial", "helvetica", "sans-serif"],
            fontSize: "12pt",
          }}
        >
          Ngoài ra, với tiêu chí <strong>Good Mood - Good Day</strong>, nên các
          sản phẩm <strong>quần áo nam đẹp</strong> tại Routine cũng có những
          items basic, dễ dàng mix-match, giúp outfit bạn trông lịch lãm và
          phong cách hơn.
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>
        <span
          style={{
            fontFamily: ["arial", "helvetica", "sans-serif"],
            fontSize: "12pt",
          }}
        >
          Giờ đây, bạn có thể khám phá những bộ
          <strong>quần áo nam hàng hiệu</strong>, đẹp nhất, mới nhất, phong cách
          độc đáo tại hệ thống cửa hàng quần áo nam trên toàn Việt Nam, những{" "}
          <strong>shop quần áo nam</strong> của Rouitne đã có mặt tại những
          thành phố lớn như Hà Nội, Đà Nẵng, Bình Thuận, Nha Trang, Hồ Chí Minh,
          Cà Mau,...
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
          được freeship cho đơn hàng từ 399k trên toàn quốc, cùng những ưu đãi
          dành riêng cho thành viên và nhiều chương trình khuyến mãi, sale off
          và đồng giá hấp dẫn khác.
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

export default Description;
