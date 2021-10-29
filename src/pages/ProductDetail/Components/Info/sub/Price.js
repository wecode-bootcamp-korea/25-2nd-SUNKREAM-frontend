import React from 'react';
import styled from 'styled-components';

const Price = ({ price }) => {
  return (
    <Box>
      <Text title>최근 거래가</Text>
      <Wrapper>
        <Text>{price ? price?.toLocaleString('ko-KR') : '- '}</Text>
        <Text>원</Text>
      </Wrapper>
    </Box>
  );
};

export default Price;

const Box = styled.div`
  margin-top: 11px;
`;

const Wrapper = styled.div`
  margin-top: 2px;
  float: inline-end;
  text-align: right;
`;

const Rate = styled.p`
  font-size: 13px;
  color: #db5014;
`;

const Text = styled.span`
  float: ${props => props.title && 'left'};
  padding-top: ${props => props.title && '4px'};
  font-size: ${props => (props.title ? '13px' : '20px')};
  font-weight: ${props => !props.title && 'bold'};
  color: ${props => (props.title ? 'gray' : 'black')};
`;
