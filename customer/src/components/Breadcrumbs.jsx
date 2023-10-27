import React from "react";
import { styled } from "styled-components";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  const { data } = props;
  return (
    <Wrapper>
      <li className="home">
        <Link>Trang chủ</Link>
      </li>
      {data.map((item, idx) => (
        <li key={idx}>{item.name}</li>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    font-weight: 400;
    padding: 10px 0;
    font-size: 13px;
    line-height: 15px;
    color: #787878;
    text-transform: capitalize;
    a {
      color: #787878;
    }
  }
  .home {
    a::after {
      content: "/";
      font-size: 13px;
      line-height: 15px;
      margin: 0 4px;
    }
  }
`;

Breadcrumbs.propTypes = {
  data: PropTypes.array,
};
export default Breadcrumbs;
