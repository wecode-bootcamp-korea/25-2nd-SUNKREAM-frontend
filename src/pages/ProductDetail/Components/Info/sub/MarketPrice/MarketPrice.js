import React from 'react';
import styled from 'styled-components';
import ControlBtns from './ControlBtns';
import Chart from './Chart';
import TradeTable from './TradeTable';

const MarketPrice = props => {
  return (
    <MarketPriceBox>
      <Wrapper>
        <Title>시세</Title>
        <SizeBtn>
          모든 사이즈 <i className="fas fa-chevron-down" />
        </SizeBtn>
      </Wrapper>
      <ControlBtns list={TERM_BTN_LIST} />
      <Chart />
      <ControlBtns list={TRADE_BTN_LIST} />
      <TradeTable />
    </MarketPriceBox>
  );
};

export default MarketPrice;

const MarketPriceBox = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 39px 0 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.15px;
`;

const SizeBtn = styled.span`
  font-size: 13px;
  color: ${props => props.theme.gray};
  cursor: pointer;
`;

const TERM_BTN_LIST = [
  {
    id: '1m',
    name: '1개월',
  },
  {
    id: '3m',
    name: '3개월',
  },
  {
    id: '6m',
    name: '6개월',
  },
  {
    id: '1y',
    name: '1년',
  },
];

const TRADE_BTN_LIST = [
  {
    id: '1',
    name: '체결 거래',
  },
  {
    id: '2',
    name: '판매 입찰',
  },
  {
    id: '3',
    name: '구매 입찰',
  },
];
