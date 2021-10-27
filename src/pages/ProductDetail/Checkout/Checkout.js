import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SwtichMenu from './components/SwtichMenu';
import SwitchAuction from './components/SwitchAuction';

const Checkout = props => {
  const [isClicked, setClicked] = useState(false);
  const [productData, setProductData] = useState({});
  const [noSellPrice, setNoSellPrice] = useState(false);
  const [noBuyPrice, setNoBuyPrice] = useState(false);

  const changeColor = () => {
    if (productData.bidding_id !== null) setClicked(!isClicked);
  };

  const dataLoad = () => {
    fetch(`http://10.58.1.125:8000/orders/bidding/1/${sell_id}`)
      .then(res => res.json())
      .then(res => {
        setProductData(res.data);
      });
  };

  useEffect(() => {
    dataLoad();
    if (productData.bidding_id === null) setClicked(true);
    if (productData.sell_price === null) {
      setNoSellPrice(true);
      if (productData.buy_price === null) {
        setNoBuyPrice(true);
      }
    }
    if (productData.buy_price === null) {
      setNoBuyPrice(true);
      if (productData.sell_price === null) {
        setNoSellPrice(true);
      }
    }
  }, [productData.sell_price, productData.buy_price, productData.bidding_id]);

  const {
    product_name,
    product_brand,
    product_model_number,
    size,
    sell_price,
    buy_price,
    user_point,
    product_image_url,
    bidding_id,
  } = productData;

  const sell_id = 2;

  return (
    <CheckoutContainer>
      <CheckoutContent>
        <CheckoutBox>
          <ProductBox>
            <Product>
              <ImgBox>
                <ProductImg
                  src={productData && product_image_url}
                  alt="Product Image"
                />
              </ImgBox>
              <ProductText>
                <SerialNumber>
                  {productData && product_model_number}
                </SerialNumber>

                <KoreanName>
                  {productData && product_brand} {productData && product_name}
                </KoreanName>
                <SerialNumber>{productData && size}</SerialNumber>
              </ProductText>
            </Product>
          </ProductBox>
          <PriceListBox>
            <PriceList>
              <GrayedTag>즉시 {}가</GrayedTag>
              {noBuyPrice ? (
                <PriceP>- 원</PriceP>
              ) : (
                <PriceP>{productData && buy_price} 원</PriceP>
              )}
            </PriceList>
            <PriceListBorder>
              <GrayedTag>즉시 판매가</GrayedTag>
              {noSellPrice ? (
                <PriceP>- 원</PriceP>
              ) : (
                <PriceP>{productData && sell_price} 원</PriceP>
              )}
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
                <AtagBuy
                  bidding_id={productData && bidding_id}
                  clicker={isClicked}
                  onClick={changeColor}
                >
                  즉시 구매
                </AtagBuy>
              </SelectList>
            </Tab>
          </TabSelect>
          {!isClicked ? (
            <SwtichMenu
              buy_price={productData && buy_price}
              sell_price={productData && sell_price}
              user_point={productData && user_point}
              bidding_id={productData && bidding_id}
              clicker={isClicked}
            />
          ) : (
            <SwitchAuction
              user_point={productData && user_point}
              clicker={isClicked}
              changeColor={changeColor}
            />
          )}
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
  padding: 0 20px;
  box-shadow: 5px 5px 10px lightgray;
  background-color: white;
`;

const ProductBox = styled.div`
  flex: 1;
  padding: 10px 0;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ImgBox = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  padding-top: 0;
  margin-bottom: 60px;
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
  padding-top: 10px;
  font-weight: bolder;
  font-size: 15px;
`;

// const ProductName = styled.p`
//   margin-top: 5px;
//   font-weight: bold;
//   font-size: 13px;
// `;

const KoreanName = styled.p`
  margin-top: 5px;
  font-weight: lighter;
  font-size: 13px;
  color: grey;
`;

const PriceListBox = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid lightgray;
`;

const PriceList = styled.li`
  flex: 1;
  margin-left: 115px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`;

const PriceListBorder = styled.li`
  flex: 1;
  margin-left: 115px;
  padding-left: 110px;
  padding-right: 115px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  border-left: 1px solid lightgray;
`;

const GrayedTag = styled.p`
  justify-content: space-between;
  opacity: 40%;
  font-weight: 500;
  font-size: 15px;
  color: gray;
`;

const PriceP = styled.p`
  justify-content: space-between;
  font-size: 18px;
`;

const TabSelect = styled.div`
  position: relative;
`;

const Tab = styled.ul`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 40px;
  background-color: lightgray;
`;

const SelectListLeft = styled.li`
  flex: 1;
`;
const SelectList = styled.li`
  flex: 1;
`;

const AtagAuction = styled.a`
  display: block;
  flex: 1;
  padding-top: 10px;
  margin: 2px;
  height: 40px;
  border-radius: 40px;
  font-weight: 800;
  text-align: center;
  background-color: ${props => (props.clicker ? '#ef6253' : 'lightgray')};
  color: ${props => (props.clicker ? 'white' : 'black')};
`;

const AtagBuy = styled.a`
  display: block;
  padding-top: 10px;
  margin: 2px;
  height: 40px;
  border-radius: 40px;
  font-weight: 800;
  text-align: center;
  background-color: ${props => (props.clicker ? 'lightgray' : '#ef6253')};
  color: ${props => (props.clicker ? 'black' : 'white')};
  pointer-events: ${props => (props.bidding_id === null ? 'none' : null)};
`;

export default Checkout;
