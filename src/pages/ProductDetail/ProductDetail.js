import React from 'react';
import styled from 'styled-components';
import Info from './Components/Info/Info';
import Silde from './Components/Slide/Silde';
import Recommend from './Components/Recommend/Recommend';

const ProductDetail = () => {
  return (
    <ProductDetailBox>
      <Top>
        <SlideBox>
          <Silde />
        </SlideBox>
        <DetailBox>
          <Info />
        </DetailBox>
      </Top>
      <Bottom>
        <Recommend />
      </Bottom>
    </ProductDetailBox>
  );
};
export default ProductDetail;

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
