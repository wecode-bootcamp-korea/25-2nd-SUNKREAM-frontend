import React from 'react';
import styled from 'styled-components';
import Size from './sub/Size';
import TitleBox from './sub/TitleBox';
import Price from './sub/Price';
import TradeBtns from './sub/TradeBtns';
import InterestBtn from './sub/InterestBtn';
import InfoDetail from './sub/InfoDetail/InfoDetail';
import DeliveryInfo from './sub/DeliveryInfo';
import CheckList from './sub/CheckList/CheckList';
import MarketPrice from './sub/MarketPrice/MarketPrice';

const Info = () => {
  return (
    <InfoBox>
      <TitleBox />
      <Size />
      <Price />
      <TradeBtns />
      <InterestBtn />
      <InfoDetail />
      <DeliveryInfo />
      <AdBanner
        src="images/ProductDetail/advertising_banner.png"
        alt="banner.img"
      />
      <MarketPrice />
      <CheckList />
    </InfoBox>
  );
};

export default Info;

const InfoBox = styled.section`
  padding-left: 40px;
  border-left: 1px solid ${({ theme }) => theme.lightgray};
`;

const AdBanner = styled.img`
  padding-top: 20px;
  width: 100%;
`;
