import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react/cjs/react.development';

const Modal = ({ children, sizeList, currentSize, handleButton }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <ModalBox>
      <Title>{children}</Title>
      <SizeWrapper>
        {sizeList.map(item => {
          const { size } = item;
          const isCurrentSize = size === currentSize ? 'right' : '';
          return (
            <SizeItem id={size} key={size} isCurrentSize={isCurrentSize}>
              <Text id={size} onClick={handleButton} size>
                {size}
              </Text>
            </SizeItem>
          );
        })}
      </SizeWrapper>
    </ModalBox>
  );
};

export default Modal;

const ModalBox = styled.div`
  position: fixed;
  top: 15%;
  left: 35%;
  width: 480px;
  height: 514px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 16px;
`;

const Title = styled.h3`
  padding: 18px 50px 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

const SizeWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(90px, 1fr));
  padding: 0 32px;
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
  text-align: center;
  border: 1px solid
    ${({ isCurrentSize, theme }) =>
      isCurrentSize === 'right' ? 'black' : theme.lightgray};
  border-radius: 10px;
  cursor: pointer;
`;

const Text = styled.p`
  color: ${({ theme, size }) => (size ? theme.deepgray : theme.orange)};
`;
