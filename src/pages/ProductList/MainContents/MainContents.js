import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Content from './Contents/Contents';
import Category from './Category/Category';
import styled from 'styled-components';
import { BASE_URL } from '../../../config';

export default function MainContents({
  filterdSearch,
  filterItem,
  showFilterItem,
}) {
  const [productItem, setProductItem] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    fetch(`${BASE_URL}/products?search=${searchParams.get('search')}`)
      .then(res => res.json())
      .then(data => {
        setProductItem(data.products_list);
      });
  }, [location.search]);

  return (
    <Container>
      <Category setProductItem={setProductItem} FILTER_TITLE={FILTER_TITLE} />
      <Content
        filterdSearch={filterdSearch}
        filterItem={filterItem}
        showFilterItem={showFilterItem}
        productItem={productItem}
        setProductItem={setProductItem}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 200px;
`;

const FILTER_TITLE = [
  {
    id: 1,
    titleName: '브랜드',
    Placeholder: '모든 브랜드',
    filterList: [
      { id: 1, productMenu: 'Nike' },
      { id: 2, productMenu: 'Converse' },
      { id: 3, productMenu: 'Vans' },
    ],
  },
  {
    id: 2,
    titleName: '사이즈',
    Placeholder: '모든 사이즈',
    filterList: [
      { id: 4, productMenu: '230' },
      { id: 5, productMenu: '240' },
      { id: 6, productMenu: '250' },
      { id: 7, productMenu: '260' },
      { id: 8, productMenu: '270' },
      { id: 9, productMenu: '280' },
      { id: 10, productMenu: '290' },
      { id: 11, productMenu: '300' },
    ],
  },
  {
    id: 3,
    titleName: '가격',
    Placeholder: '모든 가격',
    filterList: [
      { id: 12, productMenu: '10만원 이하' },
      { id: 13, productMenu: '10만원 ~ 30만원 이하' },
      { id: 14, productMenu: '30만원 이상' },
    ],
  },
];
