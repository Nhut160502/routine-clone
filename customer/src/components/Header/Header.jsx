import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import {
  IconHeartBlack,
  IconHeartWhite,
  IconMenuBar,
  IconShoppingCartBlack,
  IconShoppingCartWhite,
  IconUseWhite,
  IconUserBlack,
  LogoBlack,
  LogoWhite,
} from "../Icon";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNav(true);
        if (location.pathname === "/") {
          setTransparent(false);
        }
        return;
      } else {
        setNav(false);
        if (location.pathname === "/") {
          setTransparent(true);
        }
        return;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/") {
      setTransparent(true);
    }
  }, [location]);

  return (
    <Wrapper className={transparent && "transparent"}>
      {!nav && (
        <Col sm="5">
          {location.pathname !== "/" && <IconMenuBar className="icon" />}
        </Col>
      )}
      <Col sm={!nav ? "2" : "1"}>
        {!transparent ? (
          <LogoBlack className="logo" />
        ) : (
          <LogoWhite className="logo" />
        )}
      </Col>
      {nav && (
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
      )}
      <Col sm="5">
        <Right>
          <Search className="icon">
            <span>Tiềm kiếm</span>
          </Search>
          {!transparent ? (
            <>
              <IconUserBlack className="icon" />
              <IconHeartBlack className="icon" />
              <IconShoppingCartBlack className="icon" />
            </>
          ) : (
            <>
              <IconUseWhite className="icon" />
              <IconHeartWhite className="icon" />
              <IconShoppingCartWhite className="icon" />
            </>
          )}
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
`;
const Search = styled.div`
  width: 350px;
  padding: 9px 30px;
  border-bottom: 1px solid #cdcdcd;
  height: 36px;
  color: #a3a3a3;
  background-repeat: no-repeat;
  background-position: left center;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjM1NzYgOS4xOTIwNUMxOC4zNTc2IDQuMTMwNTYgMTQuMjI1MiAwIDkuMTY1NTYgMEM0LjEwNTk2IDAgMCA0LjEwNTk2IDAgOS4xOTIwNUMwIDE0LjI3ODEgNC4xMDU5NiAxOC4zNTc2IDkuMTkyMDUgMTguMzU3NkMxMS4yNTgzIDE4LjM1NzYgMTMuMTM5MSAxNy42Njg5IDE0LjY3NTUgMTYuNTI5OEwxOC4xNDU3IDIwTDIwIDE4LjE0NTdMMTYuNTI5OCAxNC42NzU1QzE3LjcyMjggMTMuMDk3IDE4LjM2NDkgMTEuMTcwNiAxOC4zNTc2IDkuMTkyMDVaTTkuMTkyMDUgMTUuNzA4NkM1LjU4OTQgMTUuNzA4NiAyLjY0OTAxIDEyLjc2ODIgMi42NDkwMSA5LjE2NTU2QzIuNjQ5MDEgNS41NjI5MSA1LjU4OTQgMi42MjI1MiA5LjE5MjA1IDIuNjIyNTJDMTIuNzk0NyAyLjYyMjUyIDE1LjczMzIgNS41NjI5MSAxNS43MzMyIDkuMTY1NTZDMTUuNzA4NiAxMi43OTQ3IDEyLjc5NDcgMTUuNzA4NiA5LjE5MjA1IDE1LjcwODZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  span {
    font-size: 15px;
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
