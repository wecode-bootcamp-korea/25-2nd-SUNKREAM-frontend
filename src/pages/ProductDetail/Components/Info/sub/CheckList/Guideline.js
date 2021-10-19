import React from 'react';
import styled from 'styled-components';

const Guideline = props => {
  const { item } = props;
  const { icon, title, content } = item;

  return (
    <Item>
      <Icon>
        <i className={icon} />
      </Icon>
      <TextLine>
        <Text>{title}</Text>
        <Text description>{content}</Text>
      </TextLine>
    </Item>
  );
};

export default Guideline;

const Item = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Icon = styled.span`
  width: 47px;
  font-size: 26px;
  color: ${({ theme }) => theme.charcoal};
`;

const TextLine = styled.span``;

const Text = styled.p`
  margin-top: ${props => props.description && '2px'};
  font-size: 13px;
  color: ${({ theme, description }) => description && theme.gray};
`;
