import React from "react";
import { styled } from "styled-components";
import {
  IconArrowYellow,
  IconEmail,
  IconFaceBook,
  IconInsta,
  IconLazada,
  IconLocationYellow,
  IconShopee,
  IconTiktok,
  IconYoutube,
  IconZalo,
  LogoBlack,
} from "./Icon";
import Button from "./Button";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Wrapper>
      <Information>
        <LogoBlack className="logo" />
        <h3>CÔNG TY TNHH ROUTINE VIETNAM</h3>
        <p>Mã Số Thuế: 0106486365</p>
        <p>&nbsp;</p>
        <p>Văn Phòng: Tầng 8 tòa nhà Lê Đình,&nbsp;11Bis Nguyễn Gia Thiều,</p>
        <p>phường Võ Thị Sáu, quận 3, TP HCM.</p>
        <h3 style={{ marginTop: "30px" }}>THAM GIA BẢNG TIN CỦA CHÚNG TÔI</h3>
        <div className="control">
          <IconEmail />
          <input type="text" placeholder="Nhập địa chỉ email của bạn" />
          <Button>Đăng Ký</Button>
        </div>
        <p>&nbsp;</p>
        <img
          src="https://routine.vn/media/amasty/webp/wysiwyg/image_3-removebg-preview_1_png.webp"
          alt=""
        />
      </Information>
      <About>
        <div className="company">
          <div className="title">
            <h3>Công ty</h3>
          </div>
          <ul className="list">
            <li>
              <Link>
                <IconArrowYellow />
                <span>Giới thiệu về ROUTINE</span>
              </Link>
            </li>
            <li>
              <Link>
                <IconArrowYellow />
                <span>Tuyển dụng</span>
              </Link>
            </li>
            <li>
              <Link>
                <IconArrowYellow />
                <span>Tin thời trang</span>
              </Link>
            </li>
            <li>
              <Link>
                <IconArrowYellow />
                <span>Hợp tác nhượng quyền</span>
              </Link>
            </li>
            <li>
              <Link>
                <IconArrowYellow />
                <span>Liên hệ</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="socical">
          <h3>Kết nối với chúng tôi</h3>
          <ul>
            <li>
              <Link>
                <IconFaceBook className="icfb" />
              </Link>
            </li>
            <li>
              <Link>
                <IconInsta className="icins" />
              </Link>
            </li>
            <li>
              <Link>
                <IconZalo className="iczl" />
              </Link>
            </li>
            <li>
              <Link>
                <IconYoutube className="icyt" />
              </Link>
            </li>
            <li>
              <Link>
                <IconTiktok className="ictt" />
              </Link>
            </li>
            <li>
              <Link>
                <IconShopee className="icsp" />
              </Link>
            </li>
            <li>
              <Link>
                <IconLazada className="iclz" />
              </Link>
            </li>
          </ul>
        </div>
      </About>
      <Policy>
        <div className="title">
          <h3>Chính sách khách hàng</h3>
        </div>
        <ul className="list">
          <li>
            <Link>
              <IconArrowYellow />
              <span>Chính sách khách hàng thân thiết</span>
            </Link>
          </li>
          <li>
            <Link>
              <IconArrowYellow />
              <span>Chính sách đổi trả</span>
            </Link>
          </li>
          <li>
            <Link>
              <IconArrowYellow />
              <span>Chính sách bảo hành</span>
            </Link>
          </li>
          <li>
            <Link>
              <IconArrowYellow />
              <span>Chính sách bảo mật</span>
            </Link>
          </li>
          <li>
            <Link>
              <IconArrowYellow />
              <span>Câu hỏi thường gặp</span>
            </Link>
          </li>
          <li>
            <Link>
              <IconArrowYellow />
              <span>Hướng dẫn mua hàng online</span>
            </Link>
          </li>
          <li>
            <Link>
              <IconArrowYellow />
              <span>Hướng dẫn kiểm tra hạng thẻ thành viên</span>
            </Link>
          </li>
        </ul>
      </Policy>
      <Store>
        <div className="title">
          <h3>Cửa hàng</h3>
          <ul>
            <li>
              <h4 className="store-name">
                <IconLocationYellow />
                <span>Cửa hàng thứ 34</span>
              </h4>
              <p>
                F15 tầng 1 AEON Mall Tân Phú, 30 Bờ Bao Tân Thắng, Phường Sơn
                Kỳ, TP Hồ Chí Minh
              </p>
            </li>
            <li>
              <h4 className="store-name">
                <IconLocationYellow />
                <span>Cửa hàng thứ 33</span>
              </h4>
              <p>809 Giải Phóng, Phường Giáp Bát, Quận Hoàng Mai, TP Hà Nội</p>
            </li>
            <li>
              <h4 className="store-name">
                <IconLocationYellow />
                <span>Cửa hàng thứ 32</span>
              </h4>
              <p>192 - 194 Hoa Lan, Phường 2, Quận Phú Nhuận, TP Hồ Chí Minh</p>
            </li>
            <li>
              <Link style={{ textDecoration: "underline" }}>
                <h4 className="store-name">
                  <span>XEM TẤT CẢ CỬA HÀNG</span>
                  <IconArrowYellow style={{ width: "7px" }} />
                </h4>
              </Link>
            </li>
          </ul>
        </div>
      </Store>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 60px 50px;
  background-color: #f8f8f8;
  h3 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 15px;
  }
  .title {
    h3 {
      display: inline-block;
      margin-bottom: 1rem;
    }
    h3::after {
      content: "";
      background: #e1e1e1;
      height: 6px;
      display: block;
      margin-top: -6px;
      margin-right: -10px;
    }
  }
  .list {
    li {
      a {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 14px;
        padding: 4px 0;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
const Information = styled.div`
  margin-right: auto;
  width: 25%;
  .logo {
    height: 44px;
    margin-bottom: 24px;
  }
  h3 {
    margin: 0 0 15px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
  p {
    font-size: 14px;
  }
  .control {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #cecece;
    justify-content: space-between;
    max-width: 360px;
    width: 100%;
    margin-bottom: 10px;
    input {
      border: none;
      background-color: transparent;
      width: 100%;
    }
    button {
      padding: 5px !important;
      font-size: 10px !important;
      width: 80px !important;
      height: 24px !important;
    }
  }
`;
const About = styled.div`
  width: 18.6%;
  .company {
    margin-bottom: 26px;
  }
  .socical {
    ul {
      display: flex;
      width: 150px;
      align-items: center;
      flex-wrap: wrap;
      li {
        margin: 0 18px 12px 0;
        .icfb {
          height: 16px;
          width: 10px;
        }
        .icins {
          height: 16px;
          width: 16px;
        }
        .iczl {
          width: 28px;
          height: 16px;
        }
        .icyt {
          width: 20px;
          height: 16px;
        }
        .ictt {
          width: 18px;
          height: 18px;
        }
        .icsp {
          width: 21px;
          height: 23px;
        }
        .iclz {
          width: 30px;
          height: 22px;
        }
      }
    }
  }
`;

const Policy = styled.div`
  width: 20.6%;
`;
const Store = styled.div`
  width: 20%;
  ul {
    li {
      margin-bottom: 20px;
      h4 {
        margin: 0 0 8px;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      p {
        font-size: 14px;
        padding-left: 16px;
      }
    }
  }
`;

export default Footer;
