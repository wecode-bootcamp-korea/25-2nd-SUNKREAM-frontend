import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const ItemLists = ({ list }) => {
  return (
    <ListBox>
      {list.length < 1 ? (
        <Wrapper noList>거래 내역이 없습니다.</Wrapper>
      ) : (
        <Wrapper>
          {list.map(item => {
            return <Item key={item.id} info={item} />;
          })}
        </Wrapper>
      )}
    </ListBox>
  );
};

export default ItemLists;

const ListBox = styled.div`
  padding-top: 20px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  padding: ${({ noList }) => !noList && '20px 0'};
  height: 500px;
  text-align: ${({ noList }) => noList && 'center'};
  overflow: scroll;
  font-size: 15px;
`;
