import React from 'react';
import styled from 'styled-components';
import TextLine from './TextLine';

const Contents = ({ contents }) => {
  return (
    <Wrapper>
      {contents.map((item, idx) => (
        <>
          <Text key={idx}>{item.main}</Text>
          <TextLine content={item.content} />
        </>
      ))}
    </Wrapper>
  );
};

export default Contents;

const Wrapper = styled.div`
  padding: 20px 0;
  border-top: 1px solid gray;
`;

const Text = styled.p`
  margin: ${({ main, sub }) => !(main || sub) && '38px 0 20px'};
  margin-top: ${({ main }) => main && '20px'};
  word-break: keep-all;
  font-size: 13px;
  font-weight: ${({ main, sub }) => !(main || sub) && 'bold'};
  color: ${({ main, sub }) => (main || sub ? 'gray' : 'rgba(34,34,34,.8)')};

  &:first-child {
    margin: 0;
  }
`;
