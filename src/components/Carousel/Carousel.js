import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <Container>
        <StyledSlider {...settings}>
          {images.map(item => {
            return (
              <ImageContainer key={item.url}>
                <Image alt="광고배너" src={item.url} />
              </ImageContainer>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }
}

const Container = styled.div``;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    position: relative;
    outline: none;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 30px;
    line-height: 1;
    opacity: 0.75;
    color: gray;
  }
  .slick-prev {
    left: 25px;
    z-index: 1;
  }

  [dir='rtl'] .slick-prev {
    right: 25px;
    z-index: 1;
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
    z-index: 1;
  }
  [dir='rtl'] .slick-next {
    right: auto;
    left: 25px;
    z-index: 1;
  }
  .slick-dots {
    position: absolute;
    bottom: 20px;
    z-index: 1;
    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: 0.25;
    color: black;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }
`;

const ImageContainer = styled.div`
  object-fit: cover;
`;

const Image = styled.img`
  min-height: 450px;
  width: 100%;
  object-fit: cover;
`;

const images = [
  { id: 1, url: './images/001.png' },
  { id: 2, url: './images/003.png' },
  { id: 3, url: './images/배너4.png' },
  { id: 4, url: './images/배너5.png' },
];
