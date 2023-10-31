import React from "react";
import { styled } from "styled-components";
import { PropTypes } from "prop-types";

const Banner = (props) => {
  const { children } = props;
  return <Wrapper {...props}>{children}</Wrapper>;
};

Banner.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.div`
  img {
    width: 100%;
  }
`;

export default Banner;
