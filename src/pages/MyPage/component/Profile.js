import React from 'react';
import styled from 'styled-components';

const Profile = ({ userInfo }) => {
  const { userName, userEmail, userPoint } = userInfo;

  return (
    <Wrapper>
      <Private>
        <UserImg />
        <div>
          <Text>{userName}</Text>
          <Text sub>{userEmail}</Text>
        </div>
      </Private>
      <SubWrapper>
        <Text>잔여 포인트</Text>
        <Text sub>
          {userPoint && `${userPoint.toLocaleString('kr-KO')} 포인트`}
        </Text>
      </SubWrapper>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.lightgray};
`;

const Private = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const UserImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.lightgray};
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 30px;
  border-left: 1px solid ${({ theme }) => theme.lightgray};
`;

const Text = styled.p`
  padding-top: ${({ sub }) => sub && '5px'};
  font-size: ${({ sub }) => (sub ? '12px' : '17px')};
  color: ${({ theme, sub }) => sub && theme.gray};
  font-weight: ${({ sub }) => !sub && 'bold'};
`;
