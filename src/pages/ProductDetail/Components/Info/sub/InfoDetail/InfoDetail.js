import React from 'react';
import styled from 'styled-components';
import TextLine from './TextLine';

const InfoDetail = ({ info }) => {
  const { model_number, release_price } = info;
  const INFO_LIST = [
    { title: '모델번호', content: model_number },
    { title: '발매가', content: release_price },
  ];

  return (
    <DetailBox>
      <Header>상품 정보</Header>
      <Wrapper>
        {INFO_LIST.map((item, idx) => (
          <TextLine key={idx} item={item} />
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
