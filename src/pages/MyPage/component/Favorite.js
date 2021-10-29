import React from 'react';
import styled from 'styled-components';
import ProductItem from '../../../components/ProductItem/ProductItem';

const Favorite = ({ wishList }) => {
  return (
    <div>
      {wishList.length === 0 ? (
        <NoList>등록된 상품이 없습니다.</NoList>
      ) : (
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
      )}
    </div>
  );
};

export default Favorite;

const FavoriteBox = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const NoList = styled.div`
  padding-top: 80px;
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.gray};
`;

const ImgWrapper = styled.div`
  width: 200px;
`;
