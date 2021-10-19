import React from 'react';
import styled from 'styled-components';
import ProductItem from '../../../../components/ProductItem/ProductItem';

const Recommend = props => {
  return (
    <RecommendBox>
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </RecommendBox>
  );
};

export default Recommend;

const RecommendBox = styled.div`
  float: left;
`;
