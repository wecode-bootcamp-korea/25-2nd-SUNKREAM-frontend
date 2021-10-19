import React from 'react';
import styled from 'styled-components';

const SwtichMenu = props => {
  return (
    <>
      <InstantBuyBox>
        <InstantBuyTitle>즉시 구매가</InstantBuyTitle>
        <InstantBuyPrice>339,000</InstantBuyPrice>
        <Won>원</Won>
      </InstantBuyBox>
      <FeeBox>
        <FeeLeft>검수비</FeeLeft>
        <FeeRight>무료</FeeRight>
      </FeeBox>
      <FeeBoxBottom>
        <FeeLeft>배송비</FeeLeft>
        <FeeRight>무료 이벤트</FeeRight>
      </FeeBoxBottom>
      <TotalBox>
        <TotalPriceBox>
          <TotalPriceTitle>총 결제 금액</TotalPriceTitle>
          <TotalPrice>339,000원</TotalPrice>
        </TotalPriceBox>
      </TotalBox>
      <InstantBuyButtonBox>
        <InstantBuyButton>즉시 구매 계속</InstantBuyButton>
      </InstantBuyButtonBox>
    </>
  );
};

const InstantBuyBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid lightgray;
`;

const InstantBuyTitle = styled.p`
  padding-top: 20px;
  font-weight: bolder;
`;

const InstantBuyPrice = styled.p`
  //padding-right: 10px;
  padding-top: 50px;
  padding-bottom: 15px;
  margin-left: 450px;
  font-size: 25px;
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
  color: lightgray;
  padding-top: 10px;
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

export default SwtichMenu;
