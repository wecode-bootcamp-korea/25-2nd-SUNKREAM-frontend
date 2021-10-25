import React from 'react';
import styled from 'styled-components';

const InterestBtn = ({ wishData, handleWishBtn }) => {
  const { wish_count, check_my_wish } = wishData;

  return (
    <Button onClick={handleWishBtn}>
      <i className={`${check_my_wish ? 'fas' : 'far'} fa-bookmark`} />
      <Text>관심상품</Text>
      <Text number>{wish_count && wish_count.toLocaleString('ko-KR')}</Text>
    </Button>
  );
};

export default InterestBtn;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-top: 7px;
  width: 100%;
  line-height: 58px;
  font-size: 20px;
  color: #333;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 15px;
  font-weight: ${props => props.number && 'bold'};
`;
