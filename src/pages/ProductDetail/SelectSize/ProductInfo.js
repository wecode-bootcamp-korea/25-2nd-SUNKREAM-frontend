import React from 'react';
import styled from 'styled-components';

const ProductInfo = ({ info }) => {
  const { model, name, kr_name } = info;

  return (
    <Wrapper>
      <ImgWrapper>
        <Img src="https://kream-phinf.pstatic.net/MjAyMDEwMTJfMzIg/MDAxNjAyNDkzNDI2Mzgw.gdfh5cClyVKeEAyPxLGkes4opFzw0BpkZppespaL2h0g.5a5EEIvlxUsKgq46k1ee4vmcmStenQEdmgxA6-uGUewg.PNG/p_664cf838924344eeafa782f1d2bf058a.png?type=m" />
      </ImgWrapper>
      <TextLine>
        <Text title="title">{model}</Text>
        <Text name="name">{name}</Text>
        <Text krName="krName">{kr_name}</Text>
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
  background-color: ${({ theme }) => theme.lightgray};
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
