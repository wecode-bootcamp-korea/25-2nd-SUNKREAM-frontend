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

const Info = ({
  productInfo,
  sizeList,
  currentSize,
  sizePrice,
  handleModal,
  handleButton,
  marketData,
  wishData,
  handleWishBtn,
}) => {
  const {
    brand,
    name,
    kr_name,
    current_price,
    buy_price,
    sell_price,
    model_number,
    release_price,
  } = productInfo;

  return (
    <InfoBox>
      <TitleBox title={{ brand, name, kr_name }} />
      <Size currentSize={currentSize} handleModal={handleModal} />
      <Price price={current_price} />
      <TradeBtns price={{ buy_price, sell_price }} />
      <InterestBtn wishData={wishData} handleWishBtn={handleWishBtn} />
      <InfoDetail info={{ model_number, release_price }} />
      <DeliveryInfo />
      <AdBanner
        src="images/ProductDetail/advertising_banner.png"
        alt="banner.img"
      />
      <MarketPrice
        sizeList={sizeList}
        currentSize={currentSize}
        handleModal={handleModal}
        sizePrice={sizePrice}
        handleButton={handleButton}
        marketData={marketData}
      />
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
