import React, { useState } from 'react';

import styled from 'styled-components';

export default function ProductItem({ brand, name, price }) {
  const [toggle, setToggle] = useState(false);

  return (
    <Item>
      <ItemImg>
        <Save>
          <SaveIcon
            bookmark={toggle}
            onClick={() => {
              setToggle(bookmark => !bookmark);
            }}
          />
        </Save>
      </ItemImg>
      <ItemInfo>
        <Brand>
          <p>{brand}</p>
        </Brand>
        <ItemName>
          <p>{name}</p>
        </ItemName>
        <Price>
          <div>{price.toLocaleString('ko-KR')}</div>
          <p>즉시 구매가</p>
        </Price>
      </ItemInfo>
    </Item>
  );
}

const Item = styled.div`
  width: 306px;
  margin: 20px 0;
  padding: 0 12px;
`;

const ItemImg = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  background-color: #f6eeed;
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    & div {
      opacity: 1;
    }
  }
`;

const Save = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 15px;
  font-size: 23px;
  opacity: 0;
  transition: all 0.2s ease;
`;

const SaveIcon = styled.i.attrs(props => ({
  className: props.bookmark ? `fas fa-bookmark` : `far fa-bookmark`,
}))``;

const ItemInfo = styled.div`
  padding: 15px 0 0;
`;

const Brand = styled.div`
  p {
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 2px solid black;
  }
`;

const ItemName = styled.div`
  margin: 10px 0 0;
`;

const Price = styled.div`
  padding: 7px 0 0;

  div {
    font-size: 16px;
    font-weight: bold;
  }

  p {
    color: rgba(34, 34, 34, 0.5);
    margin: 5px 0 0;
    font-size: 13px;
  }
`;
