import React from 'react';
import styled from 'styled-components';

const Invoice = ({ count, color }) => {
  return (
    <Wrapper>
      {STATUS.map((item, idx) => (
        <SubWrapper key={idx}>
          <Text>{item}</Text>
          <Text type={item} color={color} count>
            {count?.[idx]}
          </Text>
        </SubWrapper>
      ))}
    </Wrapper>
  );
};

export default Invoice;

const Wrapper = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #fafafa;
`;

const SubWrapper = styled.div`
  flex: 1;
  margin: 18px 0;
  padding-bottom: 20px;

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.lightgray};
  }
`;

const Text = styled.p`
  margin: ${({ count }) => count && '3px'};
  text-align: center;
  font-size: ${({ count }) => (count ? '18px' : '13px')};
  font-weight: ${({ count }) => count && 'bold'};
  color: ${({ count, theme, type, color }) =>
    (!count && theme.gray) || (type === '전체' && theme[color])};
`;

const STATUS = ['전체', '입찰 중', '주문 완료'];
