import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from '../../components/Carousel/Carousel';
import ProductItemContainer from '../../components/ProductItem/ProductItemList';
import { BASE_URL } from '../../config';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      brands: [],
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}/products/brand`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          brands: data.brand_list.reverse(),
        });
      });
  }

  render() {
    const { brands } = this.state;
    return (
      <>
        <Carousel />
        {brands.map((brand, idx) => (
          <React.Fragment key={brand.name}>
            {idx !== 0 && (
              <BrandImageBanner>
                <ImageBanner
                  alt="광고배너"
                  src={`/images/${brand.brand_name}BANNER.png`}
                />
              </BrandImageBanner>
            )}
            <MainWrapper>
              <ProductItemContainer
                brand_name={brand.brand_name}
                brand_id={brand.brand_id}
              />
            </MainWrapper>
          </React.Fragment>
        ))}
      </>
    );
  }
}

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  margin: auto;
`;
const BrandImageBanner = styled.div`
  width: 100%;
  object-fit: cover;
`;

const ImageBanner = styled.img`
  width: 100%;
  min-height: 450px;
  object-fit: cover;
`;
