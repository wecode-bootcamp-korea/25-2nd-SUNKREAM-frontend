import React, { Component } from 'react';
import ProductItem from './ProductItem';
import styled from 'styled-components';

import { BASE_URL } from '../../config';

class ProductItemContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      limit: 4,
    };
  }
  componentDidMount() {
    const { brand_id } = this.props;
    fetch(`${BASE_URL}/products?brand_id=${brand_id}&limit=4`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data.products_list,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { brand_id } = this.props;
    const { limit } = this.state;

    if (prevState.limit !== limit || prevProps.brand_id !== brand_id) {
      fetch(`${BASE_URL}/products?brand_id=${brand_id}&limit=${limit}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            items: data.products_list,
          });
        });
    }
  }

  nextBtn = () => {
    const { limit } = this.state;

    this.setState({
      limit: limit + 4,
    });
  };

  render() {
    const { brand_name } = this.props;
    const { items } = this.state;
    return (
      <ProductWrapper>
        <Brand>
          <BrandName>{brand_name} </BrandName>
          <BrandSort>낮은가격순</BrandSort>
        </Brand>
        <ImageWrapper>
          {items.map(item => (
            <ProducOnetWrapper key={item.id}>
              <ProductItem
                id={item.id}
                name={item.name}
                brand={item.brand}
                price={item.product_price}
                thumbnail_url={item.thumbnail_url}
              />
            </ProducOnetWrapper>
          ))}
        </ImageWrapper>
        <ButtonWrapper>
          <Button onClick={this.nextBtn}>더보기</Button>
        </ButtonWrapper>
      </ProductWrapper>
    );
  }
}
export default ProductItemContainer;

const ProductWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Brand = styled.div`
  margin: 20px 12px 20px 40px;
`;

const BrandName = styled.h1`
  font-size: 20px;
  letter-spacing: -0.1px;
  font-weight: 700;
  color: #000;
`;

const BrandSort = styled.h1`
  font-size: 14px;
  letter-spacing: -0.21px;
  color: rgba(34, 34, 34, 0.5);
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1280px;
  flex-wrap: wrap;
  margin: auto;
  z-index: 0;
`;

const ProducOnetWrapper = styled.div`
  width: 285px;
`;
const ButtonWrapper = styled.div`
  height: 100px;
  margin: 20px;
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  left: 47%;
  align-items: center;
  text-align: center;
  height: 42px;
  padding: 0 30px;
  margin-top: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 12px;
  color: rgba(34, 34, 34, 0.8);
  line-height: 40px;
  font-size: 14px;
  letter-spacing: -0.14px;
  cursor: pointer;
  vertical-align: middle;
  background-color: #fff;
`;
