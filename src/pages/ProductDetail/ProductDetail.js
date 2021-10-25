import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Info from './Components/Info/Info';
import Silde from './Components/Slide/Silde';
import Recommend from './Components/Recommend/Recommend';
import Modal from './Components/Info/sub/Modal';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState({});

  const [marketData, setMarketData] = useState({
    graphData: [],
    tableData: {
      orderList: [],
      sellList: [],
      buyList: [],
    },
  });

  const [wishData, setWishData] = useState({});

  const [toggleModal, setToggleModal] = useState({
    sizeTitleBox: false,
    interest: false,
    sizePrice: false,
  });

  const [currentSize, setCurrentSize] = useState('모든 사이즈');

  const { sizeTitleBox, sizePrice } = toggleModal;

  const isModalOn = sizeTitleBox && 'on';

  const handleModal = ({ target }) => {
    const { id } = target;

    setToggleModal({
      ...toggleModal,
      [id]: !toggleModal[id],
    });
  };

  const handleButton = ({ target }) => {
    const { id } = target;
    setCurrentSize(id);
  };

  const handleWishBtn = () => {
    setWishData({
      ...wishData,
      check_my_wish: !wishData.check_my_wish,
    });
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductDetail/productInfo.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductDetail/marketPrice.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        const {
          order_graph_data,
          order_list,
          buy_bidding_list,
          sell_bidding_list,
        } = data;
        setMarketData(prevState => {
          return {
            ...prevState,
            graphData: order_graph_data,
            tableData: {
              orderList: order_list,
              sellList: sell_bidding_list,
              buyList: buy_bidding_list,
            },
          };
        });
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductDetail/wishData.json')
      .then(res => res.json())
      .then(data => {
        setWishData(data);
      });
  }, []);

  return (
    <>
      <Light isModalOn={isModalOn}>
        <ProductDetailBox>
          <Top>
            <SlideBox>
              <Silde />
            </SlideBox>
            <DetailBox>
              <Info
                productInfo={productInfo}
                sizePrice={sizePrice}
                sizeList={EXAMPLE}
                wishData={wishData}
                handleWishBtn={handleWishBtn}
                handleModal={handleModal}
                currentSize={currentSize}
                handleButton={handleButton}
                marketData={marketData}
              />
            </DetailBox>
          </Top>
          <Bottom>
            <Recommend />
          </Bottom>
        </ProductDetailBox>
      </Light>
      {sizeTitleBox && (
        <Modal
          currentSize={currentSize}
          handleButton={handleButton}
          sizeList={EXAMPLE}
        >
          사이즈
        </Modal>
      )}
    </>
  );
};
export default ProductDetail;

const Light = styled.div`
  background-color: white;
  filter: brightness(${({ isModalOn }) => (isModalOn === 'on' ? '0.5' : '1')});
`;

const ProductDetailBox = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Top = styled.div`
  display: flex;
  padding: 30px 40px 120px;
`;

const SlideBox = styled.div`
  position: sticky;
  top: 0;
  width: 560px;
  height: 100%;
`;

const DetailBox = styled.div`
  margin: 0 auto;
  padding-left: 40px;
  max-width: 600px;
`;

const Bottom = styled.div`
  padding: 0 30px;
`;

const EXAMPLE = [
  '모든 사이즈',
  '220',
  '230',
  '240',
  '250',
  '260',
  '270',
  '280',
];
