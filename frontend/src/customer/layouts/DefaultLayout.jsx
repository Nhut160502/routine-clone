import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { PropTypes } from "prop-types";
import SideBar from "../components/SideBar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Cart from "../components/Cart";
import Overlay from "../components/Overlay";
import Favourite from "../components/Favourite";
import Login from "../components/Login";
import Register from "../components/Register";
import axiosInterceptor from "../utils/interceptors";
import Loading from "../components/Loading";

axiosInterceptor();

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
      <Loading />
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
