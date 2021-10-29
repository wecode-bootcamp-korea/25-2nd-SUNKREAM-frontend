import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../../../config';

const SwitchAuction = ({
  history,
  changeColor,
  user_point,
  buy_price,
  match,
}) => {
  const [isClickedInput, setClickedInput] = useState(false);
  const [isPriceEnough, setIsPriceEnough] = useState(false);
  const [auctionPrice, setAuctionPrice] = useState(0);
  const [isSellAuction, setIsSellAuction] = useState(true);

  const changeBorder = () => {
    setClickedInput(!isClickedInput);
  };

  const getPrice = e => {
    const { value } = e.target;
    if (value <= 30000 || value % 1000 !== 0) {
      setIsPriceEnough(true);
    } else if (value > 30000 || value % 1000 === 0) {
      setIsPriceEnough(false);
      setAuctionPrice(value);
    }
  };

  useEffect(() => {
    if (match.params.id === 'sell') {
      setIsSellAuction(false);
    } else if (match.params.id === 'buy') {
      setIsSellAuction(true);
    }
  }, [match.params.id]);

  const handleInput = () => {
    fetch(
      `${BASE_URL}/orders/bidding/${match.params.size}/${
        match.params.id === 'buy' ? 1 : 2
      }`,
      {
        method: 'POST',
        headers: {
          Authorization: localStorage.token,
        },
        body: JSON.stringify({
          price: auctionPrice,
        }),
      }
    );
    if (auctionPrice !== 0 && !isPriceEnough) {
      window.alert('입찰이 완료되었습니다.');
      history.push('/');
    }
  };

  return (
    <>
      <InstantBuyBox clicked={isClickedInput} priceEnough={isPriceEnough}>
        <AuctionBox>
          <AuctionPrice redfont={isPriceEnough}>
            {isSellAuction ? '구매' : '판매'} 희망가
          </AuctionPrice>

          <InputBox>
            <InstantBuyPrice
              placeholder="희망가 입력"
              onFocus={changeBorder}
              onBlur={changeBorder}
              onChange={getPrice}
            />
          </InputBox>
          <Won>원</Won>
          <AlertBox>
            <PriceAlert priceEnough={isPriceEnough}>
              3만원 부터 천원단위로 입력하세요.
            </PriceAlert>
          </AlertBox>
        </AuctionBox>
      </InstantBuyBox>
      <FeeBox>
        <UserPoint>포인트</UserPoint>
        <FeeRight>{user_point && user_point.toLocaleString('ko-KR')}</FeeRight>
      </FeeBox>
      <FeeBoxBottom>
        <FeeLeft>{isSellAuction ? '배송비' : '판매수수료'}</FeeLeft>
        <FeeRight>-</FeeRight>
      </FeeBoxBottom>
      <TotalBox>
        <TotalPriceBox>
          <TotalPriceTitle>
            총 {isSellAuction ? '결제 ' : '정산 '}금액
          </TotalPriceTitle>
          <TotalPrice>
            {auctionPrice && auctionPrice.toLocaleString('ko-KR')} 원
          </TotalPrice>
        </TotalPriceBox>
      </TotalBox>
      <InstantBuyButtonBox>
        <InstantBuyButton onClick={handleInput}>
          {isSellAuction ? '구매 ' : '판매 '} 입찰 계속
        </InstantBuyButton>
      </InstantBuyButtonBox>
    </>
  );
};

const InstantBuyBox = styled.div`
  flex: 1;
  border-bottom: ${props =>
    props.clicked ? '2px solid black' : '1px solid lightgray'};
  border-bottom: ${props =>
    props.priceEnough.isPriceEnough ? '1px solid #ef6253' : '1px solid black'};
`;

const AuctionBox = styled.dl`
  display: flex;
  justify-content: space-between;
`;

const AuctionPrice = styled.dt`
  min-width: 60px;
  padding-top: 15px;
  font-weight: 700;
  color: ${props => (props.redfont ? '#ef6253' : 'black')};
`;

const InputBox = styled.dd`
  display: flex;
  flex: 1;
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
  font-size: 13px;
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
  font-weight: 500;
  color: #ef6253;
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

const AlertBox = styled.div`
  position: absolute;
  padding-left: 420px;
  padding-top: 20px;
`;

const PriceAlert = styled.p`
  font-size: 15px;
  color: #ef6253;
  visibility: ${props => (props.priceEnough ? '' : 'hidden')};
`;
export default withRouter(SwitchAuction);
