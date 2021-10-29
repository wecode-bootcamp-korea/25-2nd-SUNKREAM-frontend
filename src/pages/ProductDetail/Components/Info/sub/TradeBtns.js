import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TradeBtns = ({ price, product_id }) => {
  const { buy_price, sell_price } = price;

  return (
    <Wrapper>
      <Button buy>
        <Link
          to={localStorage.token ? `/buy/select-size/${product_id}` : '/login'}
        >
          <Text title>구매</Text>
          <Text>{buy_price ? buy_price.toLocaleString('ko-KR') : '-'}</Text>
          <Text unit>원</Text>
        </Link>
      </Button>
      <Button>
        <Link
          to={localStorage.token ? `/sell/select-size/${product_id}` : '/login'}
        >
          <Text title>판매</Text>
          <Text>{sell_price ? sell_price.toLocaleString('ko-KR') : '-'}</Text>
          <Text unit>원</Text>
        </Link>
      </Button>
    </Wrapper>
  );
};

export default TradeBtns;

const Wrapper = styled.div`
  display: flex;
  margin-top: 17px;
`;

const Button = styled.span`
  display: flex;
  text-align: center;
  flex: 1;
  padding: 20px 0;
  margin-left: ${props => !props.buy && '10px'};
  border-radius: 10px;
  background-color: ${props => (props.buy ? '#ef6253' : '#41b979')};
  color: white;
  cursor: pointer;
`;

const Text = styled.span`
  display: inline-block;
  padding-left: ${({ unit }) => unit && '4px'};
  width: ${props => props.title && '55px'};
  font-size: ${props => (props.title ? '18px' : '15px')};
  font-weight: bold;
  color: white;
`;
