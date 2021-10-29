import React from 'react';
import styled from 'styled-components';
import ControlBtns from './ControlBtns';
import Chart from './Chart';
import TradeTable from './TradeTable';
import SizeDropdown from './SizeDropdown';

const MarketPrice = ({
  sizeList,
  currentSize,
  handleModal,
  sizePrice,
  handleButton,
  marketData,
  currentPick,
  setCurrentPick,
}) => {
  const { graphData, tableData } = marketData;

  return (
    <MarketPriceBox>
      <Wrapper>
        <Title>시세</Title>
        <SizeBtn id="sizePrice" onClick={handleModal}>
          {currentSize} <i className="fas fa-chevron-down" />
          {sizePrice && (
            <SizeDropdown
              sizeList={sizeList}
              currentSize={currentSize}
              handleButton={handleButton}
            />
          )}
        </SizeBtn>
      </Wrapper>
      {graphData?.length > 1 && (
        <>
          <ControlBtns
            currentLine="term"
            currentPick={currentPick}
            list={TERM_BTN_LIST}
            setCurrentPick={setCurrentPick}
          />
          <Chart graphData={graphData} />
        </>
      )}
      <ControlBtns
        currentLine="tradeType"
        currentPick={currentPick}
        list={TRADE_BTN_LIST}
        setCurrentPick={setCurrentPick}
      />
      <TradeTable tableData={tableData} currentPick={currentPick} />
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
  position: relative;
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
    id: 'orderList',
    name: '체결 거래',
  },
  {
    id: 'sellList',
    name: '판매 입찰',
  },
  {
    id: 'buyList',
    name: '구매 입찰',
  },
];
