import React from 'react';
import styled from 'styled-components';

const DeliveryInfo = props => {
  return (
    <Wrapper>
      <Header>배송 정보</Header>
      <Context>
        <Icon>
          <i className="fas fa-truck" />
        </Icon>
        <div>
          <Text title>
            <strong>일반 택배</strong> 무료 이벤트
          </Text>
          <Text>판매자 발송 ・ 검수 합격 후 출고</Text>
        </div>
      </Context>
    </Wrapper>
  );
};

export default DeliveryInfo;

const Wrapper = styled.div`
  padding-top: 39px;
`;

const Header = styled.span`
  font-size: 14px;
  color: rgba(34, 34, 34, 0.8);
`;

const Context = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 14px;
  padding: 12px 0 18px;
`;

const Icon = styled.span`
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
  color: gray;
  background-color: #ebebeb;
`;

const Text = styled.p`
  margin-top: ${props => !props.title && '3px'};
  font-size: ${props => (props.title ? '14px' : '13px')};
  color: ${props => !props.title && 'gray'};

  strong {
    font-weight: bold;
  }
`;
