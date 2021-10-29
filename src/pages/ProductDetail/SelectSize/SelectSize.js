import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import SizeList from './SizeList';
import SelectBtn from './SelectBtn';
import { BASE_URL } from '../../../config';

const SelectSize = ({ match }) => {
  const [currentData, setCurrentData] = useState({
    currentSize: '',
    currentPrice: '0',
    sizeId: '',
  });

  const [sizeData, setSizeData] = useState({});

  const { currentSize, currentPrice, sizeId } = currentData;
  const { product_info, size_price_list } = sizeData;

  const handleButton = (size, price, id) => {
    setCurrentData(prev => {
      return { ...prev, currentSize: size, currentPrice: price, sizeId: id };
    });
  };

  useEffect(() => {
    fetch(
      `${BASE_URL}/orders/size-price/${match.params.productId}/${
        match.params.id === 'buy' ? '2' : '1'
      }`,
      {
        method: 'GET',
        headers: {
          Authorization: localStorage.token,
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setSizeData(prevState => {
          return { ...prevState, ...data };
        });
      });
  }, [match.params.productId, match.params.id]);

  return (
    <Wrapper>
      <SelectBox>
        <ProductInfo info={product_info} />
        <SizeList
          list={size_price_list}
          currentSize={currentSize}
          handleButton={handleButton}
        />
        {currentSize && (
          <ButtonBox>
            <Link
              to={`/${match.params.id}/checkout/${match.params.productId}/${sizeId}`}
            >
              <SelectBtn currentPrice={currentPrice} />
            </Link>
          </ButtonBox>
        )}
      </SelectBox>
    </Wrapper>
  );
};

export default SelectSize;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 40px 40px;
  overflow: hidden;
  max-width: 780px;
  min-height: 900px;
`;

const SelectBox = styled.div`
  padding: 32px 32px 28px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.lightgray};
  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.1);
`;

const ButtonBox = styled.div`
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.lightgray};
`;
