import React from "react";
import { styled } from "styled-components";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  const { data } = props;
  return (
    <Wrapper>
      <li className="home">
        <Link className="item">Trang chủ</Link>
      </li>
      {data.map((item, idx) => (
        <li className="item" key={idx}>
          {item}
        </li>
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

  .item:not(:last-child):after {
    content: "/";
    font-size: 13px;
    line-height: 15px;
    font-family: inherit;
    margin: 0 4px;
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
