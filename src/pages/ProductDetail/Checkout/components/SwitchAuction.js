import React, { useState } from 'react';
import styled from 'styled-components';

const SwitchAuction = props => {
  const [isClickedInput, setClickedInput] = useState(false);
  const [, setInputPrice] = useState(0);
  const [isPriceEnough, setIsPriceEnough] = useState(false);

  const changeBorder = () => {
    setClickedInput(!isClickedInput);
  };

  const getPrice = e => {
    setInputPrice(e.target.value);
    if (e.target.value <= 30000) {
      setIsPriceEnough({ isPriceEnough: true });
    } else if (e.target.value > 30000) {
      setIsPriceEnough({ isPriceEnough: false });
    }
  };

  return (
    <>
      <InstantBuyBox clicked={isClickedInput}>
        <AuctionBox>
          <AuctionPrice redfont={isPriceEnough}>구매희망가</AuctionPrice>
          <InputBox>
            <InstantBuyPrice
              placeholder="희망가 입력"
              onFocus={changeBorder}
              onBlur={changeBorder}
              onChange={getPrice}
            />
          </InputBox>
          <Won>원</Won>
        </AuctionBox>
      </InstantBuyBox>
      <FeeBox>
        <FeeLeft>검수비</FeeLeft>
        <FeeRight>-</FeeRight>
      </FeeBox>
      <FeeBoxBottom>
        <FeeLeft>배송비</FeeLeft>
        <FeeRight>-</FeeRight>
      </FeeBoxBottom>
      <TotalBox>
        <TotalPriceBox>
          <TotalPriceTitle>총 결제 금액</TotalPriceTitle>
          <TotalPrice>-</TotalPrice>
        </TotalPriceBox>
      </TotalBox>
      <InstantBuyButtonBox>
        <InstantBuyButton>구매 입찰</InstantBuyButton>
      </InstantBuyButtonBox>
    </>
  );
};

const InstantBuyBox = styled.div`
  width: 100%;
  border-bottom: ${props =>
    props.clicked ? '2px solid black' : '1px solid lightgray'};
`;

const AuctionBox = styled.dl`
  display: flex;
  justify-content: space-between;
`;

const AuctionPrice = styled.dt`
  font-weight: 700;
  min-width: 60px;
  padding-top: 10px;
  color: ${props => (props.redfont ? 'pink' : 'black')};
`;

const InputBox = styled.dd`
  display: flex;
  align-items: center;
`;

const InstantBuyPrice = styled.input`
  margin-top: 40px;
  padding-left: 200px;
  margin-left: 140px;
  height: 25px;
  font-size: 15px;
  text-align: right;
  border: none;
  border-color: transparent;
  outline: none;
`;
const Won = styled.p`
  padding-right: 10px;
  padding-top: 50px;
  padding-bottom: 15px;
  font-size: 25px;
`;

const FeeBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

const FeeBoxBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  padding-bottom: 50px;
  border-bottom: 1px solid lightgray;
`;

const FeeLeft = styled.p`
  padding-top: 10px;
  color: lightgray;
`;
const FeeRight = styled.span`
  padding-top: 10px;
`;

const TotalBox = styled.div`
  width: 100%;
`;

const TotalPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 10px;
`;
const TotalPriceTitle = styled.p`
  font-weight: bold;
  font-size: 15px;
`;

const TotalPrice = styled.span`
  color: red;
  font-size: 20px;
`;

const InstantBuyButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const InstantBuyButton = styled.button`
  width: 90%;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: black;
  color: white;
`;

export default SwitchAuction;
