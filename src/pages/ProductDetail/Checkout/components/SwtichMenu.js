import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../../../config';

const SwtichMenu = ({
  buy_price,
  user_point,
  history,
  bidding_id,
  match,
  bidding_price,
  sell_price,
}) => {
  const [isSellAuction, setIsSellAuction] = useState(true);

  const submitOrder = () => {
    fetch(`${BASE_URL}/orders/${bidding_id}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then(res => res.json())
      .then(json => {
        if (
          match.params.id === 'buy' &&
          json.message === 'INSUFFICIENT_POINT'
        ) {
          window.alert('포인트가 부족합니다');
        } else if (
          match.params.id === 'sell' &&
          json.message === 'INSUFFICIENT_POINT'
        ) {
          window.alert('구매자의 포인트가 부족합니다');
        } else if (match.params.id === 'buy' && json.message === 'SUCCESS') {
          window.alert('구매가 완료 되었습니다.');
          history.push('/');
        } else if (match.params.id === 'sell' && json.message === 'SUCCESS') {
          window.alert('판매가 완료 되었습니다.');
          history.push('/');
        }
      });
  };

  useEffect(() => {
    if (match.params.id === 'sell') {
      setIsSellAuction(false);
    }
  }, [match.params.id]);
  return (
    <>
      <InstantBuyBox>
        <InstantBuyTitle>
          즉시 {isSellAuction ? '구매' : '판매'}가
        </InstantBuyTitle>
        <InstantBuyPrice>
          {isSellAuction
            ? `${buy_price && buy_price.toLocaleString('ko-KR')}`
            : `${sell_price && sell_price.toLocaleString('ko-KR')}`}
        </InstantBuyPrice>
        <Won>원</Won>
      </InstantBuyBox>
      <FeeBox>
        <UserPoint>포인트</UserPoint>
        <FeeRight>{user_point && user_point.toLocaleString('ko-KR')}</FeeRight>
      </FeeBox>
      <FeeBoxBottom>
        <FeeLeft>배송비</FeeLeft>
        <FeeRight>무료 이벤트</FeeRight>
      </FeeBoxBottom>
      <TotalBox>
        <TotalPriceBox>
          <TotalPriceTitle>총 결제 금액</TotalPriceTitle>
          <TotalPrice>
            {isSellAuction
              ? `${buy_price && buy_price.toLocaleString('ko-KR')}`
              : `${sell_price && sell_price.toLocaleString('ko-KR')}`}
            원
          </TotalPrice>
        </TotalPriceBox>
      </TotalBox>
      <InstantBuyButtonBox>
        <InstantBuyButton onClick={submitOrder}>
          즉시 {isSellAuction ? '구매' : '판매'} 계속
        </InstantBuyButton>
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
  padding-top: 50px;
  padding-bottom: 15px;
  margin-left: 450px;
  font-size: 23px;
  font-weight: 700;
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
  font-size: 13px;
  color: lightgray;
`;

const UserPoint = styled.p`
  padding-top: 10px;
  font-size: 13px;
  color: red;
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
  font-size: 20px;
  color: red;
`;

const InstantBuyButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const InstantBuyButton = styled.button`
  width: 95%;
  height: 55px;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: black;
  color: white;
`;

export default withRouter(SwtichMenu);
