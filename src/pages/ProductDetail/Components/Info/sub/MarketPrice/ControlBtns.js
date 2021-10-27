import React from 'react';
import styled from 'styled-components';

const ControlBtns = ({ list, currentLine, currentPick, setCurrentPick }) => {
  const handleCurrentPick = ({ target }) => {
    const { id } = target;

    setCurrentPick(prev => {
      return { ...prev, [currentLine]: id };
    });
  };

  return (
    <ControlBtnsBox>
      {list.map(item => {
        const { id, name } = item;
        const isCurrentPick = currentPick[currentLine] === id;
        return (
          <Button
            onClick={handleCurrentPick}
            isCurrentPick={isCurrentPick}
            key={id}
            id={id}
          >
            {name}
          </Button>
        );
      })}
    </ControlBtnsBox>
  );
};

export default ControlBtns;

const ControlBtnsBox = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.lightgray};
`;

const Button = styled.p`
  display: inline-block;
  flex: 1;
  margin: 3px;
  padding: 7px 0 9px;
  font-size: 13px;
  text-align: center;
  border-radius: 8px;
  background-color: ${({ isCurrentPick, theme }) =>
    isCurrentPick ? 'white' : theme.lightgray};
  cursor: pointer;
`;
