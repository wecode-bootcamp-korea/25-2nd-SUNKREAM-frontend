import React, { useEffect } from 'react';
import { KAOKAO_LOGIN_URL } from '../../../config';
import styled from 'styled-components';
import { BASE_URL } from '../../../config';

let accessCode = window.location.search.split('=')[1];
let tokenAddress = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_RESTAPI_KEY}&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${accessCode}`;

const RedirectHandler = ({ history, location }) => {
  useEffect(() => {
    fetch(`${tokenAddress}`)
      .then(res => res.json())
      .then(data => {
        fetch(`http://${KAOKAO_LOGIN_URL}/users/login/kakao`, {
          headers: {
            Authorization: data.access_token,
          },
        })
          .then(res => res.json())
          .then(access_token => {
            localStorage.setItem('token', access_token.access_token);
            history.push('/');
          })
          .catch(err => {
            window.alert('로그인 정보를 다시 확인 해 주세요');
            history.push('/login');
          });
      });
  }, [history, location]);

  return (
    <div>
      <LoginImage src="/images/sangchu1.jpg" alt="로그인 대기 이미지" />
      <Alarm>로그인중....</Alarm>
    </div>
  );
};

const Alarm = styled.h1`
  font-size: 150px;
  padding-left: 30%;
  padding-top: 20%;
`;

const LoginImage = styled.img`
  width: 400px;
  height: auto;
  align-items: center;
`;

export default RedirectHandler;
