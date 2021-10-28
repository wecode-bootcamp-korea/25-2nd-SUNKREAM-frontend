import React from 'react';
import styled from 'styled-components';
import ProductItem from '../../../components/ProductItem/ProductItem';

const Favorite = ({ wishList }) => {
  return (
    <FavoriteBox>
      {wishList.map(({ id, brand, name, price, image }) => {
        const url = image[0]?.thumbnail;
        return (
          <ImgWrapper key={id}>
            <ProductItem
              id={id}
              brand={brand}
              name={name}
              price={price}
              thumbnail_url={url}
            />
          </ImgWrapper>
        );
      })}
    </FavoriteBox>
  );
};

export default Favorite;

const FavoriteBox = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const ImgWrapper = styled.div`
  width: 200px;
`;
