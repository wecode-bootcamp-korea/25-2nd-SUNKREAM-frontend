import React from 'react';
import styled from 'styled-components';

const Section = ({ children, title }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

export default Section;

const Title = styled.h2`
  margin: 42px 0 0;
  padding: 0 10px 16px;
  font-size: 18px;
  font-weight: bold;
`;
