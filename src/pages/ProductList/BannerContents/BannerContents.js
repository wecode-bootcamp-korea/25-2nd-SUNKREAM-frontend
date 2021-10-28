import React, { useState } from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function BannerContents() {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  return (
    <Container>
      <ImageWrap>
        <StyledSlider {...settings}>
          <div>
            <img alt="광고" src="image/productList/banner01.png" />
          </div>
          <div>
            <img alt="광고" src="image/productList/banner02.png" />
          </div>
          <div>
            <img alt="광고" src="image/productList/banner03.png" />
          </div>
          <div>
            <img alt="광고" src="image/productList/banner04.png" />
          </div>
          <div>
            <img alt="광고" src="image/productList/banner05.png" />
          </div>
        </StyledSlider>
      </ImageWrap>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  z-index: 2;
  height: 110px;
  background-color: #ffb60078;
  overflow: hidden;
`;

const ImageWrap = styled.div`
  img {
    width: 100%;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    z-index: 100;
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;

    opacity: 0.75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: 25px;
  }
  [dir='rtl'] .slick-prev {
    right: 25px;
    left: auto;
  }
  .slick-prev:before {
    content: '←';
  }
  [dir='rtl'] .slick-prev:before {
    content: '→';
  }

  .slick-next {
    right: 25px;
  }
  [dir='rtl'] .slick-next {
    right: auto;
    left: 25px;
  }
  .slick-next:before {
    content: '→';
  }
  [dir='rtl'] .slick-next:before {
    content: '←';
  }
`;
