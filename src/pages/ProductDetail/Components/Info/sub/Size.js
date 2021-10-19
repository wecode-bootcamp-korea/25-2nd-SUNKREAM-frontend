import React from 'react';
import styled from 'styled-components';

const Size = () => {
  return (
    <Box>
      <Text title>사이즈</Text>
      <SizeBtn>
        <Text>모든 사이즈</Text>
        <Icon>
          <i className="fas fa-caret-square-down" />
        </Icon>
      </SizeBtn>
    </Box>
  );
};

export default Size;

const Box = styled.div`
  padding-top: 19px;
  padding-bottom: 12px;
  border-bottom: 1px solid lightgray;
`;

const SizeBtn = styled.button`
  float: right;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`;

const Text = styled.span`
  margin-right: ${props => !props.title && '5px'};
  padding-top: ${props => props.title && '4px'};
  font-size: ${props => (props.title ? '13px' : '16px')};
  color: ${props => (props.title ? 'gray' : 'black')};
`;

const Icon = styled.span`
  font-size: 14px;
`;
