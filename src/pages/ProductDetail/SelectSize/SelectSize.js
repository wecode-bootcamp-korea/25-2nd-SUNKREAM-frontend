import React, { useState } from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import SizeList from './SizeList';
import SelectBtn from './SelectBtn';

const SelectSize = props => {
  const [currentData, setCurrentData] = useState({
    currentSize: '',
    currentPrice: '0',
  });

  const { currentSize, currentPrice } = currentData;

  const handleButton = (size, price) => {
    setCurrentData(prev => {
      return { ...prev, currentSize: size, currentPrice: price };
    });
  };

  return (
    <Wrapper>
      <SelectBox>
        <ProductInfo info={PRODUCT} />
        <SizeList
          list={EXAMPLE}
          currentSize={currentSize}
          handleButton={handleButton}
        />
        {currentSize && (
          <ButtonBox>
            <SelectBtn currentPrice={currentPrice} />
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

const EXAMPLE = [
  { size: '220', price: 289000 },
  { size: '230', price: 287000 },
  { size: '240', price: 267000 },
  { size: '250', price: 567000 },
  { size: '260', price: 867000 },
  { size: '270', price: 345000 },
  { size: '280', price: 234000 },
];

const PRODUCT = {
  model: 'New Balance',
  name: 'New Balance 992 Made in USA Navy',
  kr_name: '뉴발란스 992 메이드 인 USA 네이비',
};
