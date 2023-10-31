import React from "react";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import { PropTypes } from "prop-types";
import "../scss/style.scss";

const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">{children}</div>
        <AppFooter />
      </div>
    </div>
  );
};
DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultLayout;
