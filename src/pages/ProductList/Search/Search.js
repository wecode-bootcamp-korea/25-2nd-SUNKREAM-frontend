import React, { useState } from 'react';
import SearchList from './SearchList/SearchList';
import styled from 'styled-components';

export default function Search({
  changeSearchLogo,
  filterItem,
  linkBtn,
  isChangeBtn,
  filterdSearch,
}) {
  const [searchList, setSearchList] = useState(false);

  const searchBarToggleHandler = e => {
    const inputValue = e.target.value;

    if (inputValue.length > 0) {
      setSearchList(searchList => true);
    } else if (inputValue === '') {
      setSearchList(searchList => false);
    }
  };

  const filterSearchEvent = e => {
    searchBarToggleHandler(e);
    filterdSearch(e);
  };

  return (
    <Container>
      <Inner>
        <SearchTitle>
          <SearchLogo
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            changeSearchLogo={changeSearchLogo}
          >
            SHOP
          </SearchLogo>
          <SearchBar changeSearchLogo={!changeSearchLogo}>
            <input
              placeholder="브랜드명,모델명,모델번호 등"
              onChange={filterSearchEvent}
              onKeyUp={filterdSearch}
            />

            <SearchList searchList={searchList} filterItem={filterItem} />
          </SearchBar>
        </SearchTitle>
        <SearchFilter>
          <FilterList>
            <i className="fas fa-align-left" />
          </FilterList>
          {FILTER_LIST.map(({ id, title }) => {
            return (
              <FilterList
                key={id}
                changeBtn={linkBtn[title]}
                onClick={isChangeBtn}
              >
                {title}
              </FilterList>
            );
          })}
        </SearchFilter>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 120px;
  background: white;
  border-bottom: 1px solid #e3e3e3;
`;

const Inner = styled.div`
  width: 1280px;
  padding: 8px 40px 0;
  margin: 0 auto;
`;

const SearchTitle = styled.div`
  height: 57px;
  padding: 0 120px 24px;
`;

const SearchBar = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 100%;
  margin: 0 8px;
  border-bottom: 3px solid #000;

  display: ${props => props.changeSearchLogo && 'none'};

  input {
    width: 100%;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;

    ::placeholder {
      color: #d0d0d0;
    }
  }
`;

const SearchLogo = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: black;
  cursor: pointer;

  display: ${props => props.changeSearchLogo && 'none'};
`;

const SearchFilter = styled.ul`
  display: flex;
  height: 54px;
  padding: 0 0 16px;
`;

const FilterList = styled.li`
  margin-left: 8px;
  padding: 10px 12px;
  font-size: 15px;
  text-align: center;
  letter-spacing: -0.15px;
  border-radius: 8px;
  background: ${props => (props.changeBtn ? '#fff' : '#f4f4f4')};
  color: ${props => props.changeBtn && '#f15746'};

  cursor: pointer;

  i:hover {
    color: #f15746;
  }
`;

const FILTER_LIST = [
  { id: 1, title: '나이키' },
  { id: 2, title: '반스' },
  { id: 3, title: '컨버스' },
  { id: 4, title: '슈크림짱' },
];
