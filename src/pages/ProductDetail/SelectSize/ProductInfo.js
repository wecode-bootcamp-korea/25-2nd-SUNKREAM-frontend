import React from 'react';
import styled from 'styled-components';

const ProductInfo = ({ info }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={info && info.product_image_url} />
      </ImgWrapper>
      <TextLine>
        <Text title="title">{info && info.product_brand}</Text>
        <Text name="name">{info && info.product_name}</Text>
      </TextLine>
    </Wrapper>
  );
};

export default ProductInfo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
`;

const ImgWrapper = styled.div`
  flex: none;
  padding: 6px;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const TextLine = styled.div`
  padding-left: 16px;
`;

const Text = styled.p`
  margin-top: ${({ title }) => !title && '4px'};
  font-size: ${({ krName }) => (!krName ? '14px' : '13px')};
  font-weight: ${({ title }) => title && 'bold'};
  color: ${({ krName, theme }) => krName && theme.gray};
`;
