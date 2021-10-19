import React from 'react';
import styled from 'styled-components';

const TradeBtns = () => {
  return (
    <Wrapper>
      <Button buy>
        <Text title>구매</Text>
        <Text>163,000</Text>
        <Text>원</Text>
      </Button>
      <Button>
        <Text title>판매</Text>
        <Text>235,000</Text>
        <Text>원</Text>
      </Button>
    </Wrapper>
  );
};

export default TradeBtns;

const Wrapper = styled.div`
  display: flex;
  margin-top: 17px;
`;

const Button = styled.a`
  display: flex;
  flex: 1;
  align-items: center;
  text-align: center;
  width: 55px;
  padding: 20px 0;
  margin-left: ${props => !props.buy && '10px'};
  border-radius: 10px;
  background-color: ${props => (props.buy ? '#ef6253' : '#41b979')};
  color: white;
`;

const Text = styled.span`
  width: ${props => props.title && '55px'};
  font-size: ${props => (props.title ? '18px' : '15px')};
  font-weight: bold;
  color: white;
`;
