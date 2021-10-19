import React from 'react';
import styled from 'styled-components';
import TextLine from './TextLine';

const InfoDetail = () => {
  return (
    <DetailBox>
      <Header>상품 정보</Header>
      <Wrapper>
        {INFO_LIST.map((name, idx) => (
          <TextLine key={idx} name={name} />
        ))}
      </Wrapper>
    </DetailBox>
  );
};

export default InfoDetail;

const DetailBox = styled.div``;

const Header = styled.h3`
  display: inline-block;
  padding: 39px 0 20px;
  font-weight: bold;
  font-size: 18px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;

const INFO_LIST = ['모델번호', '발매가'];
