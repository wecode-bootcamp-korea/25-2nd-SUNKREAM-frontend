import React from 'react';
import styled from 'styled-components';

const TextLine = ({ item }) => {
  const { title, content } = item;

  return (
    <Wrapper>
      <Text title>{title}</Text>
      {title === '모델번호' ? (
        <Text modelName>{content}</Text>
      ) : (
        <Text>{content && `${content.toLocaleString('ko-KR')}원`}</Text>
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
