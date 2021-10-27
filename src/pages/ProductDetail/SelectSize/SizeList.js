import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const SizeList = ({ list, currentSize, handleButton, match }) => {
  const { params } = match;
  const { id } = params;

  return (
    <SizeWrapper>
      {list.map(({ size, price }, idx) => {
        const isCurrentSize = size === currentSize ? 'right' : '';
        return (
          <SizeItem
            key={idx}
            isCurrentSize={isCurrentSize}
            onClick={() => handleButton(size, price)}
          >
            <div>{size}</div>
            <Price tradeType={id}>
              {price && price.toLocaleString('ko-KR')}
            </Price>
          </SizeItem>
        );
      })}
    </SizeWrapper>
  );
};

export default withRouter(SizeList);

const SizeWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(90px, 1fr));
  padding: 20px 0;
`;

const SizeItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 4px;
  min-width: 90px;
  min-height: 50px;
  font-size: 14px;
  font-weight: ${({ isCurrentSize }) => isCurrentSize === 'right' && 'bold'};
  color: ${({ theme }) => theme.deepgray};
  text-align: center;
  border: 1px solid
    ${({ isCurrentSize, theme }) =>
      isCurrentSize === 'right' ? 'black' : theme.lightgray};
  border-radius: 10px;
  cursor: pointer;
`;

const Price = styled.span`
  color: ${({ theme, tradeType }) =>
    tradeType === 'buy' ? theme.orange : theme.mint};
`;
