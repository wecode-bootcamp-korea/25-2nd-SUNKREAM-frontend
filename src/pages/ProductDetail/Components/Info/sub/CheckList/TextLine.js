import React from 'react';
import styled from 'styled-components';

const TextLine = ({ content }) => {
  return (
    <>
      {content.map((item, idx) =>
        item.startsWith('-') ? (
          <Text key={idx} main>
            {item}
          </Text>
        ) : (
          <Text key={idx} sub>
            {item}
          </Text>
        )
      )}
    </>
  );
};

export default TextLine;

const Text = styled.p`
  margin: ${props => !(props.main || props.sub) && '38px 0 20px'};
  margin-top: ${props => props.main && '20px'};
  word-break: keep-all;
  font-size: 13px;
  font-weight: ${props => !(props.main || props.sub) && 'bold'};
  color: ${props => (props.main || props.sub ? 'gray' : 'rgba(34,34,34,.8)')};

  &:nth-child(1) {
    margin: 0;
  }
`;
