import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const Item = ({ history, info }) => {
  const {
    product_id,
    product_brand,
    product_name,
    size,
    product_image_url,
    order_status,
  } = info;

  return (
    <ItemBox
      onClick={() => {
        history.push(`/product-detail/${product_id}`);
        window.scrollTo(0, 0);
      }}
    >
      <Wrapper>
        <ImgWrapper>
          <Img src={product_image_url} />
        </ImgWrapper>
        <TextLine>
          <Text brand="brand">{product_brand}</Text>
          <Text name="name">{product_name}</Text>
          <Text size="size">{size}</Text>
        </TextLine>
      </Wrapper>
      <Status status={order_status}>{order_status || '입찰 중'}</Status>
    </ItemBox>
  );
};

export default withRouter(Item);

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Status = styled.p`
  font-weight: bold;
  color: ${({ theme, status }) => !status && theme.orange};
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
  margin-top: ${({ brand }) => !brand && '4px'};
  font-size: ${({ size }) => (!size ? '14px' : '13px')};
  font-weight: ${({ brand }) => brand && 'bold'};
  color: ${({ size, theme }) => size && theme.gray};
`;
