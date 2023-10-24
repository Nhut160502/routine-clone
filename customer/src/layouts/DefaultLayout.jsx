import React, { useEffect, useState } from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header/Header";
import { PropTypes } from "prop-types";
import SideBar from "src/components/SideBar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const DefaultLayout = (props) => {
  const { children } = props;
  const location = useLocation();
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setFixed(true);
    }
  }, [location]);

  return (
    <>
      <Header />
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
  &.pt0 {
    padding-top: 0 !important;
  }
`;

export default DefaultLayout;
