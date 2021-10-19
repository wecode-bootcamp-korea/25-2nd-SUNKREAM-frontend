import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Silde = props => {
  return (
    <Slider {...setting}>
      {EXAMPLE.map((url, idx) => (
        <ImgBox key={idx}>
          <Img src={url} alt={`${url}_image`} />
        </ImgBox>
      ))}
    </Slider>
  );
};

export default Silde;

const ImgBox = styled.div``;

const Img = styled.img`
  width: 100%;
`;

const EXAMPLE = [
  'https://cdn.pixabay.com/photo/2020/07/15/18/26/footwear-5408643_960_720.jpg',
  'https://cdn.pixabay.com/photo/2020/07/19/05/31/nike-5418992__340.jpg',
];

// slick setting
const setting = {
  dots: true,
  infinite: true,
  speed: 300,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
