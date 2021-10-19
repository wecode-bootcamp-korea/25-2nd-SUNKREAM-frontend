import React, { useState } from 'react';
import styled from 'styled-components';
import SwtichMenu from './components/SwtichMenu';
import SwitchAuction from './components/SwitchAuction';

const Checkout = props => {
  const [isClicked, setClicked] = useState(false);

  const changeColor = () => {
    setClicked(!isClicked);
  };

  return (
    <CheckoutContainer>
      <CheckoutContent>
        <CheckoutBox>
          <ProductBox>
            <Product>
              <ImgBox>
                <ProductImg src="/images/sangchu.jpg" alt="Product Image" />
              </ImgBox>
              <ProductText>
                <SerialNumber>DH1348-001</SerialNumber>
                <ProductName>Nike x Patta Air Max 1 Monarch</ProductName>
                <KoreanName>나이키 x 파타 에어맥스 1 모나크</KoreanName>
                <SerialNumber>230</SerialNumber>
              </ProductText>
            </Product>
          </ProductBox>
          <PriceListBox>
            <PriceList>
              <GrayedTag>즉시 구매가</GrayedTag>
              <PriceP>210,000 원</PriceP>
            </PriceList>
            <PriceListBorder>
              <GrayedTag>즉시 판매가</GrayedTag>
              <PriceP>201,000 원</PriceP>
            </PriceListBorder>
          </PriceListBox>
          <TabSelect>
            <Tab>
              <SelectListLeft>
                <AtagAuction clicker={isClicked} onClick={changeColor}>
                  구매 입찰
                </AtagAuction>
              </SelectListLeft>
              <SelectList>
                <AtagBuy clicker={isClicked} onClick={changeColor}>
                  즉시 구매
                </AtagBuy>
              </SelectList>
            </Tab>
          </TabSelect>
          {!isClicked ? <SwtichMenu /> : <SwitchAuction />}
        </CheckoutBox>
      </CheckoutContent>
    </CheckoutContainer>
  );
};

const CheckoutContainer = styled.div`
  background-color: #fafafa;
`;

const CheckoutContent = styled.div`
  margin: 0 auto;
  padding: 20px 40px 160px;
  max-width: 780px;
`;

const CheckoutBox = styled.div`
  background-color: white;
  padding: 0 20px;
`;

const ProductBox = styled.div`
  padding: 10px 0;
  //margin-right: 100px
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ImgBox = styled.div`
  position: relative;
  padding-top: 0;
  margin-bottom: 60px;
  width: 75px;
  height: 75px;
  border-radius: 10px;
`;
const ProductImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const ProductText = styled.div`
  margin-left: 50px;
`;

const SerialNumber = styled.strong`
  display: block;
  font-size: 15px;
  font-weight: bolder;
  padding-top: 10px;
`;

const ProductName = styled.p`
  font-weight: bold;
  font-size: 13px;
  margin-top: 5px;
`;

const KoreanName = styled.p`
  color: grey;
  font-weight: lighter;
  font-size: 13px;
  margin-top: 5px;
`;

const PriceListBox = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid lightgray;
  -webkit-box-align: center;
  flex: 1;
`;

const PriceList = styled.li`
  flex: 1;
  text-align: center;
  margin-left: 115px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const PriceListBorder = styled.li`
  flex: 1;
  text-align: center;
  margin-left: 115px;
  padding-left: 110px;
  padding-right: 115px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-left: 1px solid lightgray;
`;

const GrayedTag = styled.p`
  justify-content: space-between;
  color: gray;
  opacity: 40%;
  font-size: 15px;
`;

const PriceP = styled.p`
  justify-content: space-between;
  font-size: 18px;
`;

const TabSelect = styled.div`
  position: relative;
`;

const Tab = styled.ul`
  border: 1px solid lightgray;
  border-radius: 40px;
  background-color: lightgray;
  display: flex;
`;

const SelectListLeft = styled.li`
  flex: 1;
`;
const SelectList = styled.li`
  flex: 1;
`;

const AtagAuction = styled.a`
  display: block;
  padding-top: 10px;
  margin: 2px;
  height: 40px;
  text-align: center;
  border-radius: 40px;
  font-weight: 800;
  background-color: ${props => (props.clicker ? '#ef6253' : 'lightgray')};
  color: ${props => (props.clicker ? 'white' : 'black')};
`;

const AtagBuy = styled.a`
  display: block;
  padding-top: 10px;
  margin: 2px;
  height: 40px;
  text-align: center;
  border-radius: 40px;
  font-weight: 800;
  background-color: ${props => (props.clicker ? 'lightgray' : '#ef6253')};
  color: ${props => (props.clicker ? 'black' : 'white')};
`;

export default Checkout;
