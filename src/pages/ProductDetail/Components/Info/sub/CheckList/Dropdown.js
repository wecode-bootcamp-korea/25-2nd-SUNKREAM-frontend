import React from 'react';
import styled from 'styled-components';
import Contents from './Contents';

const DropDown = ({ id, item, currentToggle, handleDropdown }) => {
  const { title, contents } = item;
  const isCurrentToggle = currentToggle === id;

  return (
    <Wrapper>
      <DropdownBox
        id={id}
        onClick={() => {
          handleDropdown(id);
        }}
      >
        <Text title>{title}</Text>
        <Text button>
          <i className="fas fa-chevron-down" />
        </Text>
      </DropdownBox>
      {isCurrentToggle && <Contents contents={contents} />}
    </Wrapper>
  );
};

export default DropDown;

const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
`;

const DropdownBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 0 17px;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 15px;
  color: ${props => props.button && 'gray'};
`;
