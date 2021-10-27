import React, { useEffect } from 'react';
import { KAOKAO_LOGIN_URL } from '../../../config';
import styled from 'styled-components';

let accessCode = window.location.search.split('=')[1];
let tokenAddress = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_RESTAPI_KEY}&
redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${accessCode}`;

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
    <Alarm>
      <LoadingGif src="/images/loading.gif" alt="loading icon gif" />
      <LoadingGif src="/images/loading.gif" alt="loading icon gif" />
      <LoadingGif src="/images/loading.gif" alt="loading icon gif" />
      <LoadingGif src="/images/loading.gif" alt="loading icon gif" />
      <LoadingGif src="/images/loading.gif" alt="loading icon gif" />
    </Alarm>
  );
};

const Alarm = styled.div``;

const LoadingGif = styled.img``;
export default RedirectHandler;
