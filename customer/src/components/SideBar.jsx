import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  IconContract,
  IconLocation,
  IconNews,
  IconPlusBlack,
  IconPlusWhite,
  IconTracking,
  IconUserBlack,
} from "./Icon";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  disableTransparent,
  enbleTransparent,
  hiddenSidebar,
  openSidebar,
} from "src/providers/sidebarSlice";

const SideBar = (props) => {
  const [types, setTypes] = useState("men");
  const [subMenu, setSubmenu] = useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const { open, transparent } = useSelector((state) => state?.sidebar);

  const handleMenu = (type) => {
    setTypes(type);
    setSubmenu();
  };
  const handleSubMenu = (type) => setSubmenu(type);

  useEffect(() => {
    setSubmenu();
    if (location.pathname === "/") {
      if (window.scrollY <= 0) {
        dispatch(openSidebar());
        dispatch(enbleTransparent());
        return;
      }
    } else {
      dispatch(disableTransparent());
      dispatch(hiddenSidebar());
      return;
    }
  }, [location, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        if (location.pathname === "/") {
          dispatch(hiddenSidebar());
          disableTransparent(disableTransparent());
          return;
        }
      } else {
        if (location.pathname === "/") {
          dispatch(openSidebar());
          dispatch(enbleTransparent());
          return;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location, dispatch]);

  const handleActiveSideBar = () => {
    dispatch(disableTransparent());
  };
  const handleOnmouseLeave = () => {
    if (location.pathname === "/" && window.scrollY <= 0) {
      dispatch(enbleTransparent());
    } else {
      dispatch(hiddenSidebar());
    }
    setSubmenu();
  };
  return (
    <Wrapper
      className={`${open === true ? "active" : ""} ${
        transparent === true ? "transparent" : ""
      }`}
      onMouseLeave={handleOnmouseLeave}
    >
      <Top className="sideTop">
        <ul>
          <li
            onMouseOver={handleActiveSideBar}
            className={types === "men" && "active"}
            onClick={() => handleMenu("men")}
          >
            Nam
          </li>
          <li
            onMouseOver={handleActiveSideBar}
            className={types === "women" && "active"}
            onClick={() => handleMenu("women")}
          >
            Nữ
          </li>
          <li
            onMouseOver={handleActiveSideBar}
            className={types === "collection" && "active"}
            onClick={() => handleMenu("collection")}
          >
            Collection
          </li>
        </ul>
      </Top>
      <Content>
        {types === "men" && (
          <div className="content">
            <ul>
              <li>
                <Link onMouseOver={handleActiveSideBar} to="/c/thoi-trang-nam">
                  Xem Tất Cả
                </Link>
              </li>
              <li onClick={() => handleSubMenu("ao-nam")}>
                <span onMouseOver={handleActiveSideBar}>Áo Nam</span>
                {transparent ? <IconPlusWhite /> : <IconPlusBlack />}
              </li>
              <li onClick={() => handleSubMenu("quan-nam")}>
                <span onMouseOver={handleActiveSideBar}>Quần Nam</span>
                {transparent ? <IconPlusWhite /> : <IconPlusBlack />}
              </li>
              <li>
                <span onMouseOver={handleActiveSideBar}>đồ lót Nam</span>
                {transparent ? <IconPlusWhite /> : <IconPlusBlack />}
              </li>
              <li>
                <span onMouseOver={handleActiveSideBar}>Phụ kiện</span>
                {transparent ? <IconPlusWhite /> : <IconPlusBlack />}
              </li>
              <li>
                <span onMouseOver={handleActiveSideBar}>ưu đãi</span>
                {transparent ? <IconPlusWhite /> : <IconPlusBlack />}
              </li>
            </ul>
          </div>
        )}

        {types === "women" && (
          <div className="content">
            <ul>
              <li>
                <Link to="/">Xem Tất Cả</Link>
              </li>
              <li>
                <span>Áo nữ</span>
                <IconPlusBlack />
              </li>
              <li>
                <span>Quần nữ</span>
                <IconPlusBlack />
              </li>
              <li>
                <span>Chân váy Nam</span>
                <IconPlusBlack />
              </li>
              <li>
                <span>đầm Nam</span>
                <IconPlusBlack />
              </li>
              <li>
                <span>Phụ kiện</span>
                <IconPlusBlack />
              </li>
              <li>
                <span>ưu đãi</span>
                <IconPlusBlack />
              </li>
            </ul>
          </div>
        )}

        {types === "collection" && (
          <div className="content collection">
            <ul>
              <li>
                <Link>
                  <span>New Arrivals</span>
                </Link>
              </li>
              <li>
                <Link>
                  <span>BEST SELLERS</span>
                </Link>
              </li>
              <li>
                <Link>
                  <span>FALL WINTER</span>
                </Link>
              </li>
              <li>
                <Link>
                  <span>COUPLE</span>
                </Link>
              </li>
              <li>
                <Link>
                  <span>Flannel</span>
                </Link>
              </li>
            </ul>
          </div>
        )}

        {subMenu === "ao-nam" && (
          <div className="submenu">
            <ul>
              <li className="title">
                <Link to="/c/thoi-trang-nam/ao-nam">Xem tất cả áo nam</Link>
              </li>
              <li>
                <Link>Áo Tank Top Nam</Link>
              </li>
              <li>
                <Link>Áo Polo Nam</Link>
              </li>
              <li>
                <Link>Áo thun nam</Link>
              </li>
              <li>
                <Link>Áo sơ mi nam</Link>
              </li>
              <li>
                <Link>Áo khoác nam</Link>
              </li>
              <li>
                <Link>Áo vest - blazer nam</Link>
              </li>
            </ul>
            <div className="submenu-image">
              <Link>
                <img
                  src="https://routine.vn/media/mega_menu/item/ao-nam-119.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        )}
        {subMenu === "quan-nam" && (
          <div className="submenu">
            <ul>
              <li className="title">
                <Link>Xem tất cả quần nam</Link>
              </li>
              <li>
                <Link>Quần jean nam</Link>
              </li>
              <li>
                <Link>Quần kaki nam</Link>
              </li>
              <li>
                <Link>Quần vải nam</Link>
              </li>
              <li>
                <Link>Quần short nam</Link>
              </li>
              <li>
                <Link>Quần jooger nam</Link>
              </li>
            </ul>
            <div className="submenu-image">
              <Link>
                <img
                  src="https://routine.vn/media/mega_menu/item/quan-nam-119.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        )}

        {!location.pathname === "/" && (
          <div className="more">
            <ul>
              <li>
                <Link>
                  <IconLocation />
                  <span>Danh sách cửa hàng</span>
                </Link>
              </li>
              <li>
                <Link>
                  <IconTracking />
                  <span>Theo dõi đơn hàng</span>
                </Link>
              </li>
              <li>
                <Link>
                  <IconNews />
                  <span>Tin thời trang</span>
                </Link>
              </li>
              <li>
                <Link>
                  <IconContract />
                  <span>Liên hệ</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Content>
      {!location.pathname === "/" && (
        <Bottom>
          <Button transparent>
            <IconUserBlack />
            <span>Đăng Nhập</span>
          </Button>
          <span className="line"></span>
          <Button transparent>
            <span>Đăng ký</span>
          </Button>
        </Bottom>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: -100%;
  top: 0;
  background-color: #fff;
  height: 100vh;
  width: 650px;
  padding: 25px 50px;
  z-index: 1;
  transition: all 0.3s;

  &.active {
    z-index: 1;
    left: 0;
  }
  &.transparent {
    background-color: transparent;
    .sideTop {
      li {
        + li {
          border-color: #fff;
        }
      }
    }
    li {
      color: #fff !important;
      &.active {
        color: #fff !important;
      }
    }
    a {
      color: #fff !important;
    }
    span {
      color: #fff !important;
    }
  }
`;
const Top = styled.div`
  ul {
    position: relative;
    left: -18px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 30px;
    li {
      cursor: pointer;
      padding: 0 18px;
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 500;
      color: #858585;
      + li {
        border-left: 1px solid #000;
      }

      &.active {
        color: #000 !important;
      }
    }
  }
`;
const Content = styled.div`
  position: relative;
  ul {
    li {
      display: block;
    }
  }
  .content {
    ul {
      margin-bottom: 38px;
      li {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 700;
        font-size: 20px;
        line-height: 40px;
        color: #000;
        padding: 0;
        background-color: transparent;
        text-transform: uppercase;
      }
    }

    &.collection {
      ul {
        li {
          text-transform: uppercase;
        }
      }
    }
  }
  .submenu {
    position: absolute;
    right: 0;
    top: 0;
    width: 220px;
    height: 500px;
    overflow-y: auto;
    ul {
      li {
        a {
          display: block;
          font-weight: 700;
          font-size: 18px;
          line-height: 26px;
          color: #000;
          text-transform: none;
          padding: 5px 0;
          background-color: transparent;
          text-transform: capitalize;
        }
      }
      .title {
        border-bottom: 1px solid #e0e0e0;
        padding: 0 0 10px;
        margin-bottom: 15px;
      }
    }
    .submenu-image {
      margin-top: 60px;
      a {
        display: block;
        img {
          width: 100%;
        }
      }
    }
  }
  .more {
    ul {
      li {
        a {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 500;
          font-size: 14px;
          line-height: 26px;
          padding: 5px 0;
          > div {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
`;
const Bottom = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: -2rem;
  height: 100px;
  padding: 16px 50px;
  gap: 0.5rem;
  background-color: #fff;
  z-index: 1;
  .line {
    width: 1px;
    height: 30px;
    background-color: #000;
  }
`;

export default SideBar;
