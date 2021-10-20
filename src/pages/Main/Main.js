import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from '../../components/Carousel/Carousel';
import ProductItem from '../../components/ProductItem/ProductItem';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      shoes: [],
      NIKE: [],
      CONVERSE: [],
      VANS: [],
      isToggle: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/shoes.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          shoes: data.shoes,
          NIKE: data.NIKE,
          CONVERSE: data.CONVERSE,
          VANS: data.VANS,
        });
      });
  }

  render() {
    const { shoes, NIKE, CONVERSE, VANS } = this.state;
    return (
      <>
        <Carousel />
        <MainWrapper>
          <ProductWrapper>
            <Brand>
              <BrandName>VANS </BrandName>
              <BrandSort>낮은가격순</BrandSort>
            </Brand>
            <ImageWrapper>
              {VANS.map(item => (
                <ProductItem
                  key={item.id}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                />
              ))}
            </ImageWrapper>
            <ButtonDiv>
              <Button>더보기</Button>
            </ButtonDiv>
          </ProductWrapper>
        </MainWrapper>
        <BrandImageBanner>
          <ImageBanner alt="광고배너" src="./images/NIKEBANNER.png" />
        </BrandImageBanner>
        <MainWrapper>
          <ProductWrapper>
            <Brand>
              <BrandName>NIKE </BrandName>
              <BrandSort>낮은가격순</BrandSort>
            </Brand>
            <ImageWrapper>
              {NIKE.map(item => (
                <ProductItem
                  key={item.id}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                />
              ))}
            </ImageWrapper>
            <ButtonDiv>
              <Button>더보기</Button>
            </ButtonDiv>
          </ProductWrapper>
        </MainWrapper>
        <BrandImageBanner>
          <ImageBanner src="./images/CONVERSEBANNER.png" />
        </BrandImageBanner>
        <MainWrapper>
          <ProductWrapper>
            <Brand>
              <BrandName>CONVERSE </BrandName>
              <BrandSort>낮은가격순</BrandSort>
            </Brand>
            <ImageWrapper>
              {CONVERSE.map(item => (
                <ProductItem
                  key={item.id}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                />
              ))}
            </ImageWrapper>
            <ButtonDiv>
              <Button>더보기</Button>
            </ButtonDiv>
          </ProductWrapper>
        </MainWrapper>
      </>
    );
  }
}

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const ProductWrapper = styled.div`
  width: 1280px;
  margin: auto;
`;

const ImageWrapper = styled.div`
  width: 1280px;
  flex-wrap: wrap;
  display: flex;
  margin: auto;
  position: relative;
  z-index: -1;
`;

const Brand = styled.div`
  margin: 20px 12px 20px 10px;
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

const ButtonDiv = styled.div`
  width: 1240px;
  height: 100px;
  margin: 20px;
`;

const Button = styled.button`
  padding: 0 30px;
  margin-top: 20px;
  border: 1px solid #d3d3d3;
  color: rgba(34, 34, 34, 0.8);
  height: 42px;
  line-height: 40px;
  border-radius: 12px;
  font-size: 14px;
  letter-spacing: -0.14px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  color: rgba(34, 34, 34, 0.8);
  background-color: #fff;
  position: absolute;
  left: 47%;
  align-items: center;
`;

const BrandImageBanner = styled.div`
  width: 100%;
  object-fit: cover;
`;

const ImageBanner = styled.img`
  min-height: 450px;
  width: 100%;
  object-fit: cover;
`;
