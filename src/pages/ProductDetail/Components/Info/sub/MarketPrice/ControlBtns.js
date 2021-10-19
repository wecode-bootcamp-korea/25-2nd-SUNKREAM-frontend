import React from 'react';
import styled from 'styled-components';

const ControlBtns = ({ list }) => {
  return (
    <ControlBtnsBox>
      {list.map(item => (
        <Button key={item.id} id={item.id}>
          {item.name}
        </Button>
      ))}
    </ControlBtnsBox>
  );
};

export default ControlBtns;

const ControlBtnsBox = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.lightgray};
`;

const Button = styled.span`
  display: inline-block;
  flex: 1;
  margin: 3px;
  padding: 7px 0 9px;
  font-size: 13px;
  text-align: center;
  border-radius: 8px;
  background-color: white;
`;
