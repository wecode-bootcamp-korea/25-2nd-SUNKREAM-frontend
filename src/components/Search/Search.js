import React from 'react';
import styled from 'styled-components';
import { useLockBodyScroll } from '../../utils/hooks';

const Search = ({ cancelToggle }) => {
  useLockBodyScroll();

  return (
    <>
      <LightBox onClick={cancelToggle} />
      <SearchBoxWrapper>
        <SearchBox>
          <SearchInputTotalWrapper>
            <SearchInputWapper>
              <SearchIcon>
                <i className="fas fa-search" />
              </SearchIcon>
              <SearchInput type="text" placeholder="브랜드명, 모델명 등" />
            </SearchInputWapper>
            <Cancel onClick={cancelToggle}>취소</Cancel>
          </SearchInputTotalWrapper>
          <ResetRecentWrapper>
            <ResetRecentTitle>최근 검색어</ResetRecentTitle>
            <ResetRecentIcon>
              <i className="fas fa-times" />
            </ResetRecentIcon>
          </ResetRecentWrapper>
          <RecentSearches />
        </SearchBox>
      </SearchBoxWrapper>
    </>
  );
};

export default Search;

const SearchBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 220px;
  background-color: white;
  z-index: 100000;
  position: fixed;
  top: 0;
  padding-top: 30px;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.3);
`;

const LightBox = styled.div`
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 100%;
  background-color: rgba(34, 34, 34, 0.5);
  overflow: hidden;
`;

const SearchBox = styled.div`
  padding-top: 30px;

  display: flex;
  flex-direction: column;
`;

const SearchInputTotalWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
`;

const SearchInputWapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 495px;
  height:40px
  border: 1px solid #ebebeb;
  background-color: #f4f4f4;
  border-radius: 8px;
  color: #222;
`;

const SearchIcon = styled.div`
  color: lightgray;
`;

const SearchInput = styled.input`
  width: 450px;
  border: 0;
  background-color: #f4f4f4;
  font-weight: 400;
  font-size: 15px;

  :focus {
    outline: none;
  }
`;

const Cancel = styled.button`
  font-size: 15px;
  padding: 0;
  margin-left: 10px;
  border: 0;
  outline: none;
  background: none;
  background-color: rgba(0, 0, 0, 0);
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
  color: #222;
`;

const ResetRecentWrapper = styled.div`
  padding: 13px 24px 9px;
  display: flex;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  vertical-align: middle;
  font-size: 14px;
  align-items: center;
`;

const ResetRecentTitle = styled.div``;
const ResetRecentIcon = styled.button`
  font-size: 2px;
  padding: 2px;
  margin-left: 5px;
  border: 0;
  outline: none;
  background: none;
  background-color: rgba(0, 0, 0, 0);
  -moz-appearance: none;
  appearance: none;
  border-radius: 50%;
  background-color: lightgray;
  color: #222;
  margin-bottom: 1px;
`;

const RecentSearches = styled.div`
  min-height: 90px;
  background-color: white;
`;
