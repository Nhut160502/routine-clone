import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

const Slibar = () => {
  return (
    <Wrapper>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
      >
        <Link>
          <img
            src="https://routine.vn/media/banner/tmp/images/Winter_collection_2023_-_desktop.jpg"
            alt=""
          />
        </Link>
        <Link>
          <img
            src="https://routine.vn/media/banner/tmp/images/Couple_Collection_Desktop.jpg"
            alt=""
          />
        </Link>
        <Link>
          <img
            src="https://routine.vn/media/banner/tmp/images/MAIN_KV-WEBSITE-01_2.jpg"
            alt=""
          />
        </Link>
        <Link>
          <img
            src="https://routine.vn/media/banner/tmp/images/MicrosoftTeams-image_2_.jpg"
            alt=""
          />
        </Link>
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  a {
    display: block;
    img {
      width: 100%;
      height: auto;
      max-width: 100%;
    }
  }
`;

export default Slibar;
