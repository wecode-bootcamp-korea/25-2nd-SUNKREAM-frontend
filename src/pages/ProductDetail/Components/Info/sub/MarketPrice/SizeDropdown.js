import React from 'react';
import styled from 'styled-components';

const SizeDropdown = ({ sizeList, currentSize, handleButton }) => {
  return (
    <Wrapper>
      {sizeList.map(item => {
        const { id, size } = item;
        const isCurrentSize = size === currentSize ? 'right' : '';
        return (
          <Button
            id={size}
            key={id}
            onClick={handleButton}
            isCurrentSize={isCurrentSize}
          >
            {size}
            {size === currentSize && <i className="fas fa-check" />}
          </Button>
        );
      })}
    </Wrapper>
  );
};

export default SizeDropdown;

const Wrapper = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
  padding: 10px;
  width: 176px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 10px;
  background-color: white;
`;

const Button = styled.p`
  position: relative;
  padding: 10px 36px 12px 15px;
  font-size: 14px;
  font-weight: ${({ isCurrentSize }) => isCurrentSize === 'right' && 'bold'};
  color: ${({ isCurrentSize, theme }) =>
    isCurrentSize ? 'black' : theme.gray};

  i {
    position: absolute;
    top: 50%;
    right: 12px;
    margin-top: -13px;
  }
`;
