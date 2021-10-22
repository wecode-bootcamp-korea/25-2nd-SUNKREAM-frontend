import React from 'react';
import styled from 'styled-components';
import KakaoLogin from './components/KakaoLogin';

const Login = props => {
  return (
    <LoginWrapper>
      <Content>
        <LoginBox>
          <LogoBox>
            <Logo> SHOEKREAM </Logo>
            <LogoText>CASH RULES EVERYTHING AROUND ME</LogoText>
          </LogoBox>
          <InputWrapper>
            <InputText>이메일 주소</InputText>
            <InputBar placeholder="예)shoekream@shoekream.co.kr" />
          </InputWrapper>
          <InputWrapper>
            <InputText>비밀번호</InputText>
            <InputBar type="password" />
          </InputWrapper>
          <ButtonBox>
            <LoginButton>
              <LoginText>로그인</LoginText>
            </LoginButton>
            <KakaoLogin />
          </ButtonBox>
        </LoginBox>
      </Content>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: block;
  margin-top: 40px;
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 0 40px;
`;

const LoginBox = styled.div`
  margin: 0 auto;
  padding: 60px 0 160px;
  width: 400px;
`;

const LogoBox = styled.div`
  text-align: center;
  margin-bottom: 60px;
  margin-left: 40px;
`;
const Logo = styled.h2`
  text-align: center;
  width: 110px;
  margin-left: 50px;
  padding-bottom: 10px;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, cursive;
  font-style: italic;
  font-weight: bolder;
  font-size: 30px;
`;

const LogoText = styled.p`
  text-align: center;
  width: 300px;
  font-weight: bold;
  font-size: 15px;
`;

const InputWrapper = styled.div`
  padding: 10px 0 14px;
`;

const InputText = styled.p`
  font-weight: bolder;
  font-size: 15px;
`;

const InputBar = styled.input`
  width: 100%;
  padding: 8px 0;
  font-size: 20px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid lightgrey;
`;

const ButtonBox = styled.div`
  padding-top: 45px;
  display: inline-block;
`;

const LoginButton = styled.button`
  margin-bottom: 10px;
  width: 400px;
  height: 50px;
  opacity: 20%;
  box-shadow: 0px 0px 0px transparent;
  text-shadow: 0px 0px 0px transparent;
  border-radius: 8px;
  border: 0px solid transparent;
  background-color: grey;
  color: white;
`;

const LoginText = styled.p`
  padding: 10 10;
`;

export default Login;
