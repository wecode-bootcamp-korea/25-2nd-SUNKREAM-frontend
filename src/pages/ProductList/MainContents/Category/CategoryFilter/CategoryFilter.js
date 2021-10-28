import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function CategoryFilter({
  setProductItem,
  titleName,
  placeholder,
  filterList,
}) {
  const history = useHistory();
  const [toggle, setToggle] = useState(false);

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const categoryList = [...filterList];
    categoryList.forEach(filter => (filter.isSelected = false));

    setCategoryList(categoryList);
  }, [filterList]);

  const filterToggleHandler = e => {
    const categoryList = [...filterList];

    const selectedIdx = categoryList.findIndex(
      filter => filter.id == e.target.id
    );
    categoryList[selectedIdx].isSelected =
      !categoryList[selectedIdx].isSelected;

    setCategoryList(categoryList);

    const brandObj = {
      1: 'NIKE',
      2: 'CONVERSE',
      3: 'VANS',
    };

    const sizeObj = {
      1: '230',
      2: '240',
      3: '250',
      4: '260',
      5: '270',
      6: '280',
      7: '290',
      8: '300',
    };

    const priceObj = {
      1: '10만원 이하',
      2: '10만원 ~ 30만원 이하',
      3: '30만원 이상',
    };

    let brand_id = brandObj[categoryList[selectedIdx].id];

    history.push(`/product-list?search=${brand_id}`);
  };

  return (
    <Filter>
      <FilterTitle
        onClick={() => {
          setToggle(toggleMoreSee => !toggleMoreSee);
        }}
      >
        <TitleList>
          <span>{titleName}</span>
          <Placeholder toggleFilter={toggle}>{placeholder}</Placeholder>
        </TitleList>
        <IoconBox>
          <MoreIcon toggleMoreSee={toggle} />
        </IoconBox>
      </FilterTitle>
      <FilterMenu toggleFilter={!toggle}>
        <li>
          {filterList.map(filter => (
            <div
              onClick={e => filterToggleHandler(e)}
              id={filter.id}
              key={filter.id}
            >
              <CheckBox id={filter.id} isCheckBoxToggle={filter.isSelected} />
              <span id={filter.id}>{filter.productMenu}</span>
            </div>
          ))}
        </li>
      </FilterMenu>
    </Filter>
  );
}

const Filter = styled.div`
  position: relative;
  z-index: 2;
  padding: 20px 0;
  border-bottom: 1px solid #a9a7a7;
  cursor: pointer;
  background: white;
`;

const FilterTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Placeholder = styled.span`
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  letter-spacing: -0.15px;
  color: rgba(34, 34, 34, 0.5);

  ${props => props.toggleFilter && `display:none`}
`;

const IoconBox = styled.div``;

const MoreIcon = styled.i.attrs(props => ({
  className: props.toggleMoreSee ? `fas fa-minus` : `fas fa-plus`,
}))``;

const FilterMenu = styled.ul`
  display: ${props => (props.toggleFilter ? `none` : 'block')};
  li {
    margin-top: 10px;

    div {
      margin-top: 5px;
    }

    span {
      font-size: 14px;
    }
  }
`;

const CheckBox = styled.i.attrs(props => ({
  className: props.isCheckBoxToggle ? 'fas fa-check-square' : 'far fa-square',
}))`
  padding-right: 10px;
`;
