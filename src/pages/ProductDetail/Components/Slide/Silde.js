import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Silde = ({ list }) => {
  return (
    <Slider {...setting}>
      {list &&
        list.map((url, idx) => (
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

// slick setting
const setting = {
  dots: true,
  infinite: true,
  speed: 300,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
