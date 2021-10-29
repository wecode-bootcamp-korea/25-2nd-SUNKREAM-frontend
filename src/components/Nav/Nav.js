import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import LogoutModal from '../LogoutModal/LogoutModal';

import Search from '../../components/Search/Search';

class Nav extends Component {
  state = {
    isToggle: false,
    isModalOn: false,
  };

  clearToken = () => {
    window.localStorage.removeItem('token');
    this.setState({ isModalOn: false });
    this.goToMain();
  };

  modalToggle = () => {
    const { isModalOn } = this.state;
    this.setState({ isModalOn: !isModalOn });
  };

  toggle = e => {
    const { isToggle } = this.state;
    this.setState({
      isToggle: !isToggle,
    });
  };

  cancelToggle = e => {
    this.setState({
      isToggle: false,
    });
  };

  goToLogin = () => {
    const { history } = this.props;
    history.push('/login');
  };

  goToMain = () => {
    const { history } = this.props;
    history.push('/');
  };

  goToMyPage = () => {
    const { history } = this.props;

    history.push('/my-page');
  };

  goToProduct = () => {
    const { history } = this.props;
    history.push('/product-list');
  };
  render() {
    const isTokenAvailable = localStorage.token || sessionStorage.token;
    const { isToggle, isModalOn } = this.state;
    return (
      <>
        <Header>
          <NavTopWrapper>
            <NavTopUl>
              <NavtopItem>
                <TopLink>고객센터</TopLink>
              </NavtopItem>
              <NavtopItem>
                <TopLink>장바구니</TopLink>
              </NavtopItem>
              <NavtopItem onClick={this.goToMyPage}>
                <TopLink>마이페이지</TopLink>
              </NavtopItem>
              <NavtopItem>
                <LoginLink
                  isTokenAvailable={isTokenAvailable}
                  onClick={this.goToLogin}
                >
                  로그인
                </LoginLink>
                <LogoutLink
                  isTokenAvailable={isTokenAvailable}
                  onClick={this.modalToggle}
                >
                  로그아웃
                </LogoutLink>
              </NavtopItem>
            </NavTopUl>
          </NavTopWrapper>
          <HeaderMain>
            {isModalOn ? (
              <LogoutModal
                clearToken={this.clearToken}
                modalToggle={this.modalToggle}
              />
            ) : null}
            <Logo>
              <LogoLink onClick={this.goToMain}>SHOE-KREAM</LogoLink>
            </Logo>
            <HeaderMainRightWrapper>
              <HeaderMainRightUl>
                <HeaderMainRightItem>
                  <HeaderMainRightLink>STYLE</HeaderMainRightLink>
                </HeaderMainRightItem>

                <HeaderMainRightItem>
                  <HeaderMainRightLink onClick={this.goToProduct}>
                    SHOP
                  </HeaderMainRightLink>
                </HeaderMainRightItem>

                <HeaderMainRightItem>
                  <HeaderMainRightLink>ABOUT</HeaderMainRightLink>
                </HeaderMainRightItem>
              </HeaderMainRightUl>
              <SearchBox>
                <SearchBoxLink onClick={this.toggle}>
                  <i className="fas fa-search" />
                </SearchBoxLink>
              </SearchBox>
            </HeaderMainRightWrapper>
          </HeaderMain>
        </Header>
        {isToggle && <Search cancelToggle={this.cancelToggle} />}
      </>
    );
  }
}

export default withRouter(Nav);

const Header = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  min-height: 100px;
  margin: 0px;
  padding: 0px;
  z-index: 1000;
  background-color: #fff;
  color: #222;
`;

const NavTopWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 32px;
  padding: 8px 40px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const NavTopUl = styled.ul`
  display: flex;
  margin-left: auto;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const NavtopItem = styled.li`
  list-style: none;
  margin-left: 24px;
`;

const TopLink = styled.span`
  align-items: center;
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34, 0.8);
  cursor: pointer;
`;

const LoginLink = styled.span`
  align-items: center;
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34, 0.8);
  cursor: pointer;
  display: ${props => (props.isTokenAvailable ? 'none' : '')};
`;

const LogoutLink = styled.span`
  align-items: center;
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34, 0.8);
  cursor: pointer;
  display: ${props => (props.isTokenAvailable ? '' : 'none')};
`;

const HeaderMain = styled.div`
  display: flex;
  padding: 0 40px;
  height: 68px;
  min-width: 320px;
  align-items: center;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const Logo = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const LogoLink = styled.a`
  width: 120px;
  height: 24px;
  cursor: pointer;
  overflow: hidden;
  cursor: pointer;
  font-family: 'Exo', sans-serif;
  font-size: 30px;
`;

const HeaderMainRightWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const HeaderMainRightUl = styled.ul`
  display: flex;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const HeaderMainRightItem = styled.li`
  margin-right: 40px;
`;

const HeaderMainRightLink = styled.a`
  position: relative;
  font-size: 15px;
  letter-spacing: -0.15px;
  cursor: pointer;
`;

const SearchBox = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  object-fit: fill;
  align-items: center;
`;

const SearchBoxLink = styled.a`
  font-size: 27px;
  font-weight: lighter;
  border: none !important;
  cursor: pointer;
`;
