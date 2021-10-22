import React, { useEffect } from 'react';
import styled from 'styled-components';

const RedirectHandler = ({ history }) => {
  let accessCode = window.location.search.split('=')[1];
  let token = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=e0550ece21de989299a9cacf557ceb2b&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${accessCode}`;

  useEffect(() => {
    fetch(`${token}`)
      .then(res => res.json())
      .then(data => {
        fetch(`http://10.58.0.153:8000/users/login/kakao`, {
          headers: {
            Authorization: data.access_token,
          },
        })
          .then(res => res.json())
          .then(rebased_token => {
            history.push('/');
          })
          .catch(err => {
            window.alert('로그인 정보를 다시 확인 해 주세요');
            history.push('/login');
          });
      });
  }, []);

  return (
    <div>
      <Alarm>로그인중....</Alarm>
    </div>
  );
};

const Alarm = styled.h1`
  font-size: 150px;
  padding-left: 30%;
  padding-top: 20%;
`;

export default RedirectHandler;
