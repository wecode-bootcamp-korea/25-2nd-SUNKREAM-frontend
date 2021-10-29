import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

class SearchItem extends Component {
  onClickHandler = () => {
    const { history, product_id, cancelToggle } = this.props;
    history.push(`/product-detail/${product_id}`);
    window.scrollTo(0, 0);
    cancelToggle();
  };

  render() {
    const { name, thumbnail_url, price } = this.props;
    return (
      <TotalWrapper onClick={this.onClickHandler}>
        <Wrapper>
          <ImageWrapper>
            <Image alt="상품대표이미지" src={thumbnail_url} />
          </ImageWrapper>
          <Discription>
            <Name>{name}</Name>
            <Price> {price && price.toLocaleString('ko-KR')}</Price>
          </Discription>
        </Wrapper>
      </TotalWrapper>
    );
  }
}

export default withRouter(SearchItem);
const TotalWrapper = styled.div`
  width: 675px;
  padding: 2px 0px;
  margin: auto;
  border-bottom: 1px solid #f4f4f4;
  &:hover {
    background-color: #fafafa;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin: 10px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 10px;
`;

const Discription = styled.div`
  width: 167px;
  height: 35px;
`;
const Name = styled.p`
  font-size: 14px;
  letter-spacing: -0.21px;
  text-overflow: ellipsis;
`;
const Price = styled.p`
  margin-top: 2px;
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34, 0.5);
`;
