import React, { Component } from 'react';
import styled from 'styled-components';

import Search from '../../components/Search/Search';

class Nav extends Component {
  state = {
    isToggle: false,
  };

  toggle = e => {
    this.setState({
      isToggle: !this.state.isToggle,
    });
  };

  cancelToggle = e => {
    this.setState({
      isToggle: false,
    });
  };

  render() {
    return (
      <>
        <Header>
          <NavTopWrapper>
            <NavTopUl>
              {TOPLINK.map(item => {
                return (
                  <NavtopItem key={item.name}>
                    <TopLink>{item.name}</TopLink>
                  </NavtopItem>
                );
              })}
            </NavTopUl>
          </NavTopWrapper>

          <HeaderMain>
            <Logo>
              <LogoLink>SHOE-KREAM</LogoLink>
            </Logo>
            <HeaderMainRightWrapper>
              <HeaderMainRightUl>
                {STYLE.map(item => {
                  return (
                    <HeaderMainRightItem key={item.name}>
                      <HeaderMainRightLink>{item.name}</HeaderMainRightLink>
                    </HeaderMainRightItem>
                  );
                })}
              </HeaderMainRightUl>
              <SearchBox>
                <SearchBoxLink onClick={this.toggle}>
                  <i className="fas fa-search" />
                </SearchBoxLink>
              </SearchBox>
            </HeaderMainRightWrapper>
          </HeaderMain>
        </Header>
        {this.state.isToggle && <Search cancelToggle={this.cancelToggle} />}
      </>
    );
  }
}

export default Nav;

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
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

const HeaderMain = styled.div`
  display: flex;
  padding: 0 40px;
  height: 68px;
  min-width: 320px;
  -webkit-box-align: center;
  align-items: center;
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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
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

const TOPLINK = [
  { name: '고객센터' },
  { name: '관심상품' },
  { name: '마이페이지' },
  { name: '로그인' },
];

const STYLE = [{ name: 'STYLE' }, { name: 'SHOP' }, { name: 'ABOUT' }];
