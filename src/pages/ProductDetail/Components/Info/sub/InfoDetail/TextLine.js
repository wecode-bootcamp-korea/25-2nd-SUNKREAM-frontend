import React from 'react';
import styled from 'styled-components';

const TextLine = props => {
  const { name } = props;
  return (
    <Wrapper>
      <Text title>{name}</Text>
      {name === '모델번호' ? (
        <Text modelName>[임시 데이터]</Text>
      ) : (
        <Text>[임시 데이터]</Text>
      )}
    </Wrapper>
  );
};

export default TextLine;

const Wrapper = styled.div`
  flex: 1;
  padding: 0 12px;
  border-left: 1px solid #ebebeb;
`;

const Text = styled.p`
  margin-top: ${props => !props.title && '4px'};
  font-weight: ${props => props.modelName && 'bold'};
  font-size: ${props => (props.title ? '12px' : '14px')};
  color: ${props => props.title && 'gray'};
`;
