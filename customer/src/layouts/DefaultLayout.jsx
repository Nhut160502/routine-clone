import React, { useEffect, useState } from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import { PropTypes } from "prop-types";
import SideBar from "src/components/SideBar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Cart from "src/components/Cart";
import Overlay from "src/components/Overlay";
import Favourite from "src/components/Favourite";
import Login from "src/components/Login";
import Register from "src/components/Register";

const DefaultLayout = (props) => {
  const { children } = props;
  const location = useLocation();
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, [location]);

  return (
    <>
      <Login />
      <Register />
      <Overlay />
      <Favourite />
      <Header />
      <Cart />
      <SideBar />
      <Content className={fixed && "pt0"}>{children}</Content>
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

const Content = styled.div`
  padding-top: 75px;
  padding-bottom: 80px;
  &.pt0 {
    padding-top: 0 !important;
  }
`;

export default DefaultLayout;
