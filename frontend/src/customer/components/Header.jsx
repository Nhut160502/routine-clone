import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import {
  IconHeartBlack,
  IconHeartWhite,
  IconMenuBar,
  IconSearch,
  IconSearchWhite,
  IconShoppingCartBlack,
  IconShoppingCartWhite,
  IconUseWhite,
  IconUserBlack,
  LogoBlack,
  LogoWhite,
} from "./Icon";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../providers/sidebarSlice";
import { openCart } from "../providers/cartSlice";
import { openOverlay } from "../providers/overlaySlice";
import SubUser from "./SubUser";
import { hiddeSubUser, openSubUser } from "../providers/subUserSlice";

const Header = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const [transparent, setTransparent] = useState();
  const dispatch = useDispatch();

  const { open } = useSelector((state) => state?.cart);
  const subUser = useSelector((state) => state?.subUser);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setNav(true);
        if (location.pathname === "/") {
          return setTransparent(false);
        }
      } else {
        setNav(false);
        if (location.pathname === "/") {
          return setTransparent(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/") {
      if (window.scrollY <= 0) {
        setTransparent(true);
      }
      return;
    } else {
      setTransparent(false);
      return;
    }
  }, [location]);

  const handleClickOpenSidebar = () => {
    dispatch(openSidebar());
  };

  // cart
  const handleClickActiveCart = () => {
    !open && dispatch(openCart());
    dispatch(openOverlay());
  };

  // sub user
  const handleAciveSubUser = () => {
    subUser.open && dispatch(hiddeSubUser());
    !subUser.open && dispatch(openSubUser());
  };

  return (
    <Wrapper className={transparent && "transparent"}>
      {(nav && (
        <>
          <Col sm="1">
            <Link to="/">
              <LogoBlack className="logo" />
            </Link>
          </Col>
          <Col sm="6">
            <Nav>
              <ul>
                <li>
                  <Link to="/c/thoi-trang-nam">Nam</Link>
                </li>
                <li>
                  <Link to="/c/thoi-trang-nu">Nữ</Link>
                </li>
                <li>
                  <Link to="/c/nam">New</Link>
                </li>
                <li>
                  <Link to="/c/nam">Best</Link>
                </li>
              </ul>
            </Nav>
          </Col>
        </>
      )) || (
        <>
          <Col sm="5">
            {location.pathname !== "/" && (
              <div className="menu-bar">
                <IconMenuBar
                  className="icon"
                  onClick={handleClickOpenSidebar}
                />
              </div>
            )}
          </Col>
          <Col sm="2">
            <Link to="/">
              {transparent ? (
                <LogoWhite className="logo" />
              ) : (
                <LogoBlack className="logo" />
              )}
            </Link>
          </Col>
        </>
      )}
      <Col sm="5">
        <Right>
          <Search className="icon">
            {transparent === false ? <IconSearch /> : <IconSearchWhite />}
            <span>Tiềm kiếm</span>
          </Search>
          {!transparent ? (
            <>
              <IconUserBlack className="icon" onClick={handleAciveSubUser} />
              <IconHeartBlack className="icon" />
              <IconShoppingCartBlack
                className="icon"
                onClick={handleClickActiveCart}
              />
            </>
          ) : (
            <>
              <IconUseWhite className="icon" onClick={handleAciveSubUser} />
              <IconHeartWhite className="icon" />
              <IconShoppingCartWhite
                className="icon"
                onClick={handleClickActiveCart}
              />
            </>
          )}
          <SubUser />
        </Right>
      </Col>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 75px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 1;

  &.transparent {
    background-color: transparent !important;
  }

  .logo {
    max-height: 33px;
    display: block;
    width: auto;
    margin: 0 auto;
    &.active {
      margin: 0 0;
    }
  }
  .icon {
    + .icon {
      margin-left: 40px;
    }
    cursor: pointer;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;
const Search = styled.div`
  width: 350px;
  padding: 9px 30px;
  border-bottom: 1px solid #cdcdcd;
  height: 36px;
  color: #a3a3a3;
  position: relative;
  span {
    font-size: 15px;
  }
  img {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Nav = styled.div`
  margin-left: 50px;
  ul {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    li {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      color: #000;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Header;
