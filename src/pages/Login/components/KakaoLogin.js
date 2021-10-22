import React from 'react';
import styled from 'styled-components';
import { ACCESS_URL } from '../../../config';

const KakaoLogin = props => {
  return (
    <div>
      <LoginLink href={ACCESS_URL}>
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
