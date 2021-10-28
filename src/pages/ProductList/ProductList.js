import React, { useState } from 'react';
import Search from './Search/Search';
import TrendContents from './TrendContents/TrendContents';
import BannerContents from './BannerContents/BannerContents';
import MainContents from './MainContents/MainContents';
import styled from 'styled-components';
import { BASE_URL } from '../../config';

function ProductList() {
  const [changeSearchLogo, setChangeSearchLogo] = useState(false);

  const searchToggleHandler = () => {
    setChangeSearchLogo(changeSearchLogo => true);
  };

  const [filterItem, setFilterItems] = useState([]);
  const [showFilterItem, setShowFilterItem] = useState('');

  const filterdSearch = e => {
    fetch(`${BASE_URL}/products?search=${e.target.value}`)
      .then(res => res.json())
      .then(data => {
        setFilterItems(data.products_list);
      });
    if (e.code === 'Enter' && e.target.value) {
      setShowFilterItem(e.target.value);
    }
  };

  const [linkBtn, setlinkBtn] = useState({
    나이키: false,
    반스: false,
    컨버스: false,
    슈크림짱: false,
  });

  const isChangeBtn = e => {
    const isSelected = { ...linkBtn };
    const activeBtn = e.target.innerText;

    for (let title in isSelected) {
      title === activeBtn
        ? (isSelected[title] = !isSelected[title])
        : (isSelected[title] = false);
    }
    setlinkBtn(isSelected);
  };

  return (
    <Container>
      <Search
        changeSearchLogo={changeSearchLogo}
        filterdSearch={filterdSearch}
        filterItem={filterItem}
        linkBtn={linkBtn}
        isChangeBtn={isChangeBtn}
      />
      <Inner>
        <TrendContents searchToggleHandler={searchToggleHandler} />
        <BannerContents />
        <MainContents
          filterdSearch={filterdSearch}
          filterItem={filterItem}
          showFilterItem={showFilterItem}
        />
      </Inner>
    </Container>
  );
}
export default ProductList;

const Container = styled.div``;

const Inner = styled.div`
  position: relative;
  top: 120px;
  width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
  overflow-x: hidden;
`;
