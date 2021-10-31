import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../../config';
import { useLockBodyScroll } from '../../utils/hooks';
import SearchItem from './SearchItem';

const Search = ({ cancelToggle, history }) => {
  useLockBodyScroll();
  const [items, setItems] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);

  const goToProductList = value => {
    const keyword = value;
    history.push(`/product-list?search=${keyword}`);
  };

  useEffect(() => {
    const recentSearch = localStorage.getItem('recentSearchKeywords');
    if (recentSearch) {
      setRecentSearch(recentSearch.split(','));
    }
  }, [items]);

  const handleChange = e => {
    updateSearchResult(e.target.value);
  };

  const pushRecentSearch = e => {
    const { value } = e.target;
    const { key } = e;
    if (key === 'Enter' && value !== '') {
      const isAlreadySearched = recentSearch.includes(value);
      const recentSearchKeywords = localStorage.getItem('recentSearchKeywords');

      if (!isAlreadySearched) {
        setRecentSearch(prev => [...prev, value]);
        localStorage.setItem(
          'recentSearchKeywords',
          recentSearchKeywords
            ? recentSearchKeywords.concat(',' + value)
            : value
        );
      } else {
        const replacedSearch = recentSearch
          .filter(keyword => keyword !== value)
          .concat(value);
        setRecentSearch(replacedSearch);
        localStorage.setItem('recentSearchKeywords', replacedSearch.join(','));
      }
      goToProductList(value);
      cancelToggle();
      e.target.value = '';
    }
  };

  const updateSearchResult = keyword => {
    fetch(`${BASE_URL}/products?search=${keyword}`)
      .then(res => res.json())
      .then(data => {
        setItems(data.products_list);
      })
      .catch(() => setItems([]));
  };

  const resetRecent = () => {
    localStorage.clear();
    setRecentSearch([]);
  };

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
              <SearchInput
                onChange={handleChange}
                onKeyPress={pushRecentSearch}
                type="search"
                placeholder="브랜드명, 모델명 등"
              />
            </SearchInputWapper>
            <Cancel onClick={cancelToggle}>취소</Cancel>
          </SearchInputTotalWrapper>
          <ResetRecentWrapper>
            <ResetRecentTitle>최근 검색어</ResetRecentTitle>
            <ResetRecentIcon onClick={resetRecent}>
              <i className="fas fa-times" />
            </ResetRecentIcon>
            <SearchContentWrapper>
              {recentSearch.map(item => (
                <RecentSearchContent key={item}>{item}</RecentSearchContent>
              ))}
            </SearchContentWrapper>
          </ResetRecentWrapper>
          <RecentSearches>
            {items.map(item => (
              <SearchItem
                key={item.id}
                name={item.name}
                price={item.product_price}
                product_id={item.id}
                thumbnail_url={item.thumbnail_url}
                cancelToggle={cancelToggle}
              />
            ))}
          </RecentSearches>
        </SearchBox>
      </SearchBoxWrapper>
    </>
  );
};

export default withRouter(Search);

const SearchBoxWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 220px;
  background-color: white;
  z-index: 10000;
  padding-top: 30px;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.3);
`;

const LightBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(34, 34, 34, 0.5);
  overflow: hidden;
  z-index: 11;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

const SearchInputTotalWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
`;

const SearchInputWapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ebebeb;
  background-color: #f4f4f4;
  border-radius: 8px;
  color: #222;
`;

const SearchIcon = styled.div`
  color: lightgray;
  margin-right: 10px;
  padding-top: 3px;
`;

const SearchInput = styled.input`
  width: 600px;
  border: 0;
  background-color: #f4f4f4;
  font-weight: 400;
  font-size: 15px;

  :focus {
    outline: none;
  }
`;

const Cancel = styled.button`
  outline: none;
  border: 0;
  padding: 0;
  margin-top: 3px;
  margin-left: 10px;
  border-radius: 0;
  background: none;
  background-color: rgba(0, 0, 0, 0);
  color: #222;
  appearance: none;
  font-size: 15px;
`;

const ResetRecentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 24px 9px;
  line-height: 20px;
  color: #000;
  vertical-align: middle;
  font-size: 12px;
`;

const ResetRecentTitle = styled.div``;
const ResetRecentIcon = styled.button`
  padding: 2px;
  margin: 0px 1px 1px 4px;
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  appearance: none;
  border-radius: 50%;
  background-color: lightgray;
  color: #222;
  font-size: 2px;
`;

const RecentSearches = styled.div`
  width: 650px;
  min-height: 90px;
  max-height: 330px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
`;
const SearchContentWrapper = styled.div`
  display: flex;
  width: 600px;
`;

const RecentSearchContent = styled.div`
  border-radius: 20%;
  padding: 0px 4px;
  margin: 0px 4px;
  background-color: #f6eeed;
`;
