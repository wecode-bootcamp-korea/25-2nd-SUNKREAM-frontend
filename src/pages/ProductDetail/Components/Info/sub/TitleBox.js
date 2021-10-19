import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleBox = () => {
  return (
    <div>
      <Link to="">Nike</Link>
      <Title>Nike Dunk Low Retro Championship Goldenrod</Title>
      <Title korean>나이키 덩크 로우 레트로 챔피언쉽 골든로드</Title>
    </div>
  );
};

export default TitleBox;

const Title = styled.p`
  color: ${props => (props.korean ? 'gray' : 'black')};
  font-size: ${props => (props.korean ? '14px' : '18px')};
`;
