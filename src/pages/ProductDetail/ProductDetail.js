import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Info from './Components/Info/Info';
import Silde from './Components/Slide/Silde';
import Modal from './Components/Info/sub/Modal';
import { URL } from '../../config';

const ProductDetail = ({ match }) => {
  const { params } = match;
  const { path } = params;

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
    sizePrice: false,
  });

  const [currentSize, setCurrentSize] = useState('모든 사이즈');

  const [currentPick, setCurrentPick] = useState({
    term: '1y',
    tradeType: 'orderList',
  });

  const { sizeTitleBox, sizePrice } = toggleModal;

  const { term } = currentPick;

  const modalOn = sizeTitleBox && 'on';

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

    fetch(`${URL.wishList}/wishflag/${path}`, {
      method: 'POST',
      body: JSON.stringify({}),
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
      });
  };

  useEffect(() => {
    fetch(`${URL.product}/${path}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data.product_detail[0]);
      });
  }, [path]);

  useEffect(() => {
    fetch(
      `${URL.chart}/${path}?size=${
        currentSize === '모든 사이즈' ? '' : currentSize
      }&period=${term}`,
      {
        method: 'GET',
      }
    )
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
  }, [path, currentSize, term]);

  useEffect(() => {
    setCurrentPick(prevState => {
      return { ...prevState, term: '1y', tradeType: 'orderList' };
    });
  }, [currentSize]);

  useEffect(() => {
    fetch(`${URL.chart}/${path}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMarketData(data);
      });
  }, [path]);

  useEffect(() => {
    fetch(`${URL.wishList}/wishflag?product_id=${path}`)
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        setWishData(prevState => {
          return { ...prevState, ...results };
        });
      });
  }, [path]);

  return (
    <>
      <Light modalOn={modalOn}>
        <ProductDetailBox>
          <Top>
            <SlideBox>
              <Silde list={productInfo.image_list} />
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
                currentPick={currentPick}
                setCurrentPick={setCurrentPick}
                handleButton={handleButton}
                marketData={marketData}
              />
            </DetailBox>
          </Top>
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
  filter: brightness(${({ modalOn }) => (modalOn === 'on' ? '0.5' : '1')});
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

const EXAMPLE = [
  { id: 1, size: '모든 사이즈' },
  { id: 2, size: '230' },
  { id: 3, size: '240' },
  { id: 4, size: '250' },
  { id: 5, size: '260' },
  { id: 6, size: '270' },
  { id: 7, size: '280' },
  { id: 8, size: '290' },
];
