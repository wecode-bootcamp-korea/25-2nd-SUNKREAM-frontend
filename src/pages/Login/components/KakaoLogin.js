import React from 'react';
import styled from 'styled-components';

const KakaoLogin = props => {
  return (
    <div>
      <LoginLink href="https://kauth.kakao.com/oauth/authorize?client_id=e0550ece21de989299a9cacf557ceb2b&redirect_uri=http://localhost:3000/oauth/callback/kakao&response_type=code">
        <KakaoButton src="/images/kakao_login_large_wide.png" />
      </LoginLink>
    </div>
  );
};

const LoginLink = styled.a``;

const KakaoButton = styled.img`
  width: 100%;
  height: 50px;
`;

export default KakaoLogin;
