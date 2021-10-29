import React from 'react';
import styled from 'styled-components';

const SelectBtn = ({ currentPrice }) => {
  return (
    <Button>
      <Text title>일반</Text>
      <Wrapper>
        <Text price>
          {currentPrice ? currentPrice.toLocaleString('ko-KR') : '입찰'}
        </Text>
        <Text>일반 배송</Text>
      </Wrapper>
    </Button>
  );
};

export default SelectBtn;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 13px;
  border-radius: 10px;
  background-color: #333;
  color: white;
  cursor: pointer;
`;

const Wrapper = styled.div`
  padding-left: 10px;
  border-left: 1px solid black;
`;

const Text = styled.p`
  padding-top: ${({ price }) => !price && '3px'};
  font-size: ${({ title }) => (title ? '15px' : '11px')};
`;
