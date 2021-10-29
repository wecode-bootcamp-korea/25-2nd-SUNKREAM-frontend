import React from 'react';
import styled from 'styled-components';

const TitleBox = ({ title }) => {
  const { brand, name } = title;

  return (
    <div>
      <Title title>{brand}나이키</Title>
      <Title>{name}</Title>
    </div>
  );
};

export default TitleBox;

const Title = styled.p`
  margin-top: ${({ title }) => !title && '4px'};
  padding-top: ${({ title }) => !title && '2px'};
  color: ${props => (props.korean ? 'gray' : 'black')};
  font-size: ${({ title }) => (title ? '18px' : '15px')};
  font-weight: ${({ title }) => title && 'bold'};
`;
