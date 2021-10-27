import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleBox = ({ title }) => {
  const { brand, name, kr_name } = title;

  return (
    <div>
      <Title>
        <Link to="/product-list">{brand}나이키</Link>
      </Title>
      <Title>{name}</Title>
      <Title korean>{kr_name}</Title>
    </div>
  );
};

export default TitleBox;

const Title = styled.p`
  color: ${props => (props.korean ? 'gray' : 'black')};
  font-size: ${props => (props.korean ? '14px' : '18px')};
`;
